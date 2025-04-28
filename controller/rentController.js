const { PrismaClient } = require('../generated/prisma');
const { v4: uuidv4 } = require('uuid');
const ImageCleanupService = require('../utils/imageCleanup');

const prisma = new PrismaClient();

const rentController = {
    async getAllRents(req, res) {
        try {
            const { status, search, page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * limit;

            const where = {};

            if (status) {
                where.order = {
                    order_status: status
                };
            }

            if (search) {
                where.OR = [
                    { id: { contains: search, mode: 'insensitive' } },
                    { identification: { contains: search, mode: 'insensitive' } },
                    { user: { name: { contains: search, mode: 'insensitive' } } },
                    { order: { products: { some: { product: { name: { contains: search, mode: 'insensitive' } } } } } }
                ];
            }

            const total = await prisma.rent.count({ where });

            const rents = await prisma.rent.findMany({
                where,
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    order: {
                        include: {
                            products: {
                                include: {
                                    product: true
                                }
                            }
                        }
                    }
                },
                orderBy: { created_at: 'desc' },
                skip,
                take: parseInt(limit)
            });

            const pages = Math.ceil(total / limit);

            res.json({
                data: rents,
                pagination: {
                    total,
                    page: parseInt(page),
                    pages,
                    limit: parseInt(limit)
                }
            });
        } catch (e) {
            console.error('Error fetching rents:', e);
            res.status(500).json({ message: 'Failed to fetch rents', error: e.message });
        }
    },

    async getRentById(req, res) {
        try {
            const { id } = req.params;

            const userId = req.user.id;
            const currentUser = await prisma.user.findUnique({
                where: { id: userId },
                include: { team: true }
            });

            if (!currentUser) {
                return res.status(401).json({ message: 'User not found' });
            }

            const isAdmin = currentUser.team?.slug === 'administrator';

            const rent = await prisma.rent.findUnique({
                where: { id },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    order: {
                        include: {
                            products: {
                                include: {
                                    product: true
                                }
                            }
                        }
                    }
                }
            });

            if (!rent) {
                return res.status(404).json({ message: 'Rent not found' });
            }

            if (rent.user_id !== userId && !isAdmin) {
                return res.status(403).json({ message: 'Not authorized to view this rent' });
            }

            res.json(rent);
        } catch (e) {
            console.error('Error fetching rent:', e);
            res.status(500).json({ message: 'Failed to fetch rent', error: e.message });
        }
    },

    async getRentsByUser(req, res) {
        try {
            const userId = req.user.id;
            const { status, search, page = 1, limit = 10 } = req.query;
            const skip = (page - 1) * limit;

            const where = { user_id: userId };

            if (status) {
                where.order = {
                    order_status: status
                };
            }

            if (search) {
                where.OR = [
                    { id: { contains: search, mode: 'insensitive' } },
                    { identification: { contains: search, mode: 'insensitive' } },
                    { order: { products: { some: { product: { name: { contains: search, mode: 'insensitive' } } } } } }
                ];
            }

            const total = await prisma.rent.count({ where });

            const rents = await prisma.rent.findMany({
                where,
                include: {
                    order: {
                        include: {
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
                        }
                    }
                },
                orderBy: { created_at: 'desc' },
                skip,
                take: parseInt(limit)
            });

            const pages = Math.ceil(total / limit);

            res.json({
                data: rents,
                pagination: {
                    total,
                    page: parseInt(page),
                    pages,
                    limit: parseInt(limit)
                }
            });
        } catch (e) {
            console.error('Error fetching user rents:', e);
            res.status(500).json({ message: 'Failed to fetch user rents', error: e.message });
        }
    },

    async createRent(req, res) {
        try {
            const userId = req.user.id;
            const {
                identification,
                phone,
                notes,
                identification_picture,
                cart_id,
                startDate,
                endDate,
            } = req.body;

            if (!identification_picture) {
                return res.status(400).json({ message: 'Identification picture is required' });
            }

            if (!cart_id) {
                return res.status(400).json({ message: 'Cart ID is required' });
            }

            const cart = await prisma.cart.findUnique({
                where: { id: cart_id },
                include: {
                    cart_items: {
                        include: {
                            product: true
                        }
                    }
                }
            });

            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }

            if (cart.user_id !== userId) {
                return res.status(403).json({ message: 'Not authorized to use this cart' });
            }

            if (cart.cart_items.length === 0) {
                return res.status(400).json({ message: 'Cart is empty' });
            }

            const start_date = new Date(startDate);
            const end_date = new Date(endDate);
            const currentDate = new Date().getDate();

            if (isNaN(start_date.getTime()) || isNaN(end_date.getTime())) {
                return res.status(400).json({ message: 'Invalid date format' });
            }

            if (start_date < currentDate) {
                console.log(startDate, currentDate);
                return res.status(400).json({ message: 'Start date cannot be in the past' });
            }

            if (end_date <= start_date) {
                return res.status(400).json({ message: 'End date must be after start date' });
            }

            const rentalDays = Math.ceil((end_date - start_date) / (1000 * 60 * 60 * 24));
            console.log(`Rental days: ${rentalDays}`);
            let totalCost = 0;

            const orderProducts = [];
            for (const item of cart.cart_items) {
                if (!item.product.is_rentable) {
                    return res.status(400).json({
                        message: `Product "${item.product.name}" is not available for rent`
                    });
                }

                if (item.product.quantity < item.quantity) {
                    return res.status(400).json({
                        message: `Not enough stock for product "${item.product.name}"`,
                        available: item.product.quantity,
                        requested: item.quantity
                    });
                }

                const productCost = item.product.price * rentalDays * item.quantity;
                console.log(`Product "${item.product.name}" cost for ${rentalDays} days: $${productCost}`);
                totalCost += productCost;

                orderProducts.push({
                    product_id: item.product_id,
                    quantity: item.quantity,
                    price: item.product.price
                });
            }


            const invoiceNumber = `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`;

            const result = await prisma.$transaction(async (prisma) => {
                const rent = await prisma.rent.create({
                    data: {
                        id: uuidv4(),
                        user: {
                            connect: { id: userId }
                        },
                        identification,
                        phone,
                        notes,
                        identification_picture
                    }
                });

                const order = await prisma.order.create({
                    data: {
                        id: uuidv4(),
                        rent: {
                            connect: { id: rent.id }
                        },
                        invoice: invoiceNumber,
                        start_date: start_date,
                        end_date: end_date,
                        total_cost: totalCost,
                        order_status: 'WAITING',
                        payment_status: 'UNPAID',
                        products: {
                            create: orderProducts.map(product => ({
                                product: {
                                    connect: { id: product.product_id }
                                },
                                quantity: product.quantity,
                                price: product.price
                            }))
                        }
                    },
                    include: {
                        products: {
                            include: {
                                product: true
                            }
                        }
                    }
                });

                for (const item of cart.cart_items) {
                    await prisma.product.update({
                        where: { id: item.product_id },
                        data: {
                            quantity: {
                                decrement: item.quantity
                            }
                        }
                    });
                }

                await prisma.cartOnItem.deleteMany({
                    where: {
                        cart_id: cart.id
                    }
                });

                return { rent, order };
            });

            res.status(201).json({
                message: 'Rent and order created successfully',
                rent: result.rent,
                order: result.order
            });
        } catch (e) {
            console.error('Error creating rent and order:', e);
            res.status(500).json({ message: 'Failed to create rent and order', error: e.message });
        }
    },

    async updateRentDocumentationBefore(req, res) {
        try {
            const { id } = req.params;
            const { documentation_before } = req.body;

            const rent = await prisma.rent.findUnique({
                where: { id },
                include: { order: true }
            });

            if (!rent) {
                return res.status(404).json({ message: 'Rent not found' });
            }

            const updatedRent = await prisma.rent.update({
                where: { id },
                data: {
                    documentation_before
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    order: true
                }
            });

            res.json({
                message: 'Rent documentation updated successfully',
                rent: updatedRent
            });
        } catch (e) {
            console.error('Error updating rent documentation:', e);
            res.status(500).json({ message: 'Failed to update rent documentation', error: e.message });
        }
    },

    async updateRentDocumentationAfter(req, res) {
        try {
            const { id } = req.params;
            const { documentation_after } = req.body;

            const rent = await prisma.rent.findUnique({
                where: { id },
                include: { order: true }
            });

            if (!rent) {
                return res.status(404).json({ message: 'Rent not found' });
            }

            const updatedRent = await prisma.rent.update({
                where: { id },
                data: {
                    documentation_after
                },
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    },
                    order: true
                }
            });

            res.json({
                message: 'Rent documentation updated successfully',
                rent: updatedRent
            });
        } catch (e) {
            console.error('Error updating rent documentation:', e);
            res.status(500).json({ message: 'Failed to update rent documentation', error: e.message });
        }
    }
};

module.exports = rentController;