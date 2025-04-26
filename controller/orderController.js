const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const orderController = {
    async getAllOrders(req, res) {
        try {
            const { status, payment, page = 1, limit = 10 } = req.query;

            const skip = (parseInt(page) - 1) * parseInt(limit);
            const take = parseInt(limit);

            const where = {};

            if (status) {
                where.order_status = status;
            }

            if (payment) {
                where.payment_status = payment;
            }

            const orders = await prisma.order.findMany({
                where,
                include: {
                    rent: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    products: {
                        include: {
                            product: true
                        }
                    }
                },
                orderBy: {
                    order_date: 'desc'
                },
                skip,
                take
            });

            const totalOrders = await prisma.order.count({ where });

            res.json({
                data: orders,
                pagination: {
                    total: totalOrders,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(totalOrders / parseInt(limit))
                }
            });
        } catch (e) {
            console.error('Error fetching orders:', e);
            res.status(500).json({ message: 'Failed to fetch orders', error: e.message });
        }
    },

    async getOrderById(req, res) {
        try {
            const { id } = req.params;

            const order = await prisma.order.findUnique({
                where: { id },
                include: {
                    rent: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    products: {
                        include: {
                            product: true
                        }
                    }
                }
            });

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            const userId = order.rent.user_id;
            if (userId !== req.user.id || req.user.teamId !== 'administrator') {
                return res.status(403).json({ message: 'Not authorized to view this order' });
            }

            res.json(order);
        } catch (e) {
            console.error('Error fetching order:', e);
            res.status(500).json({ message: 'Failed to fetch order', error: e.message });
        }
    },

    async getOrdersByUsers(req, res) {
        try {
            const userId = req.user.id;
            const { status, page = 1, limit = 10 } = req.query;

            const skip = (parseInt(page) - 1) * parseInt(limit);
            const take = parseInt(limit);

            const rents = await prisma.rent.findMany({
                where: { user_id: userId },
                select: { id: true }
            });

            const rentIds = rents.map(rent => rent.id);

            const where = {
                rent_id: {
                    in: rentIds
                }
            };

            if (status) {
                where.order_status = status;
            }

            const orders = await prisma.order.findMany({
                where,
                include: {
                    rent: true,
                    products: {
                        include: {
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                    price: true,
                                    brand: true,
                                    product_picture: true
                                }
                            }
                        }
                    }
                },
                orderBy: {
                    order_date: 'desc'
                },
                skip,
                take
            });

            const totalOrders = await prisma.order.count({ where });

            res.json({
                data: orders,
                pagination: {
                    total: totalOrders,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(totalOrders / parseInt(limit))
                }
            });
        } catch (e) {
            console.error('Error fetching user orders:', e);
            res.status(500).json({ message: 'Failed to fetch user orders', error: e.message });
        }
    },

    async updateOrderStatus(req, res) {
        try {
            const { id } = req.params;
            const { order_status, payment_status } = req.body;

            const order = await prisma.order.findUnique({
                where: { id },
                include: { rent: true }
            });

            if (!order) {
                return res.status(404).json({ message: 'Order not found' });
            }

            const updateData = {};

            if (order_status) {
                const validOrderStatuses = [
                    'APPROVED',
                    'ONRENT',
                    'OVERDUE',
                    'WAITING',
                    'REJECTED',
                    'CANCELLED',
                    'RETURNED'
                ];

                if (!validOrderStatuses.includes(order_status)) {
                    return res.status(400).json({
                        message: 'Invalid order status',
                        validValues: validOrderStatuses
                    });
                }
                updateData.order_status = order_status;
            }

            if (payment_status) {
                const validPaymentStatuses = ['UNPAID', 'PAID'];
                if (!validPaymentStatuses.includes(payment_status)) {
                    return res.status(400).json({
                        message: 'Invalid payment status',
                        validValues: validPaymentStatuses
                    });
                }
                updateData.payment_status = payment_status;
            }

            const updatedOrder = await prisma.order.update({
                where: { id },
                data: updateData,
                include: {
                    rent: {
                        include: {
                            user: {
                                select: {
                                    id: true,
                                    name: true,
                                    email: true
                                }
                            }
                        }
                    },
                    products: {
                        include: {
                            product: true
                        }
                    }
                }
            });

            if (order_status === 'CANCELLED' && order.order_status !== 'CANCELLED') {
                await prisma.$transaction(
                    order.products.map(item =>
                        prisma.product.update({
                            where: { id: item.product_id },
                            data: {
                                quantity: {
                                    increment: item.quantity
                                }
                            }
                        })
                    )
                );
            }

            res.json({
                message: 'Order status updated successfully',
                order: updatedOrder
            });
        } catch (e) {
            console.error('Error updating order status:', e);
            res.status(500).json({ message: 'Failed to update order status', error: e.message });
        }
    }
};

module.exports = orderController;