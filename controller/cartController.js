const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();

const cartController = {
    async getCart(req, res) {
        try {
            const userId = req.user.id;

            let cart = await prisma.cart.findUnique({
                where: { user_id: userId },
                include: {
                    cart_items: {
                        include: {
                            product: {
                                select: {
                                    id: true,
                                    name: true,
                                    price: true,
                                    slug: true,
                                    brand: true,
                                    product_picture: true,
                                    quantity: true,
                                    is_rentable: true,
                                    category: {
                                        select: {
                                            id: true,
                                            name: true,
                                            slug: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });

            if (!cart) {
                cart = await prisma.cart.create({
                    data: {
                        user: {
                            connect: { id: userId }
                        }
                    },
                    include: {
                        cart_items: {
                            include: {
                                product: {
                                    select: {
                                        id: true,
                                        name: true,
                                        price: true,
                                        slug: true,
                                        brand: true,
                                        product_picture: true,
                                        quantity: true,
                                        is_rentable: true,
                                        category: {
                                            select: {
                                                id: true,
                                                name: true,
                                                slug: true
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                });
            }

            const itemCount = cart.cart_items.reduce((sum, item) => sum + item.quantity, 0);
            const total = cart.cart_items.reduce((sum, item) => sum + (item.product.price * item.quantity), 0);

            res.json({
                cart,
                summary: {
                    itemCount,
                    total: parseFloat(total.toFixed(2))
                }
            });
        } catch (e) {
            console.error('Error fetching cart:', e);
            res.status(500).json({ message: 'Failed to fetch cart', error: e.message });
        }
    },

    async addToCart(req, res) {
        try {
            const userId = req.user.id;
            const { productId, quantity = 1 } = req.body;

            if (!productId) {
                return res.status(400).json({ message: 'Product ID is required' });
            }

            const quantityNum = parseInt(quantity);
            if (isNaN(quantityNum) || quantityNum < 1) {
                return res.status(400).json({ message: 'Quantity must be a positive number' });
            }

            const product = await prisma.product.findUnique({
                where: { id: productId }
            });

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            if (product.quantity < quantityNum) {
                return res.status(400).json({
                    message: 'Not enough items in stock',
                    available: product.quantity
                });
            }

            let cart = await prisma.cart.findUnique({
                where: { user_id: userId }
            });

            if (!cart) {
                cart = await prisma.cart.create({
                    data: {
                        user: {
                            connect: { id: userId }
                        }
                    }
                });
            }

            const existingCartItem = await prisma.cartOnItem.findUnique({
                where: {
                    cart_id_product_id: {
                        cart_id: cart.id,
                        product_id: productId
                    }
                }
            });

            if (existingCartItem) {
                const newQuantity = existingCartItem.quantity + quantityNum;

                if (newQuantity > product.quantity) {
                    return res.status(400).json({
                        message: 'Cannot add more items than available in stock',
                        available: product.quantity,
                        inCart: existingCartItem.quantity
                    });
                }

                const updatedItem = await prisma.cartOnItem.update({
                    where: {
                        id: existingCartItem.id
                    },
                    data: {
                        quantity: newQuantity
                    },
                    include: {
                        product: {
                            select: {
                                name: true,
                                price: true
                            }
                        }
                    }
                });

                return res.json({
                    message: 'Cart updated successfully',
                    item: updatedItem
                });
            } else {
                const newItem = await prisma.cartOnItem.create({
                    data: {
                        cart: {
                            connect: { id: cart.id }
                        },
                        product: {
                            connect: { id: productId }
                        },
                        quantity: quantityNum
                    },
                    include: {
                        product: {
                            select: {
                                name: true,
                                price: true
                            }
                        }
                    }
                });

                return res.status(201).json({
                    message: 'Item added to cart',
                    item: newItem
                });
            }
        } catch (e) {
            console.error('Error adding to cart:', e);
            res.status(500).json({ message: 'Failed to add item to cart', error: e.message });
        }
    },

    async updateCartItem(req, res) {
        try {
            const userId = req.user.id;
            const { itemId } = req.params;
            const { quantity } = req.body;

            if (quantity === undefined) {
                return res.status(400).json({ message: 'Quantity is required' });
            }

            const quantityNum = parseInt(quantity);
            if (isNaN(quantityNum) || quantityNum < 0) {
                return res.status(400).json({ message: 'Quantity must be a non-negative number' });
            }

            const cart = await prisma.cart.findUnique({
                where: { user_id: userId }
            });

            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }

            const cartItem = await prisma.cartOnItem.findFirst({
                where: {
                    id: itemId,
                    cart_id: cart.id
                },
                include: {
                    product: true
                }
            });

            if (!cartItem) {
                return res.status(404).json({ message: 'Cart item not found' });
            }

            if (quantityNum > cartItem.product.quantity) {
                return res.status(400).json({
                    message: 'Requested quantity exceeds available stock',
                    available: cartItem.product.quantity
                });
            }

            if (quantityNum === 0) {
                await prisma.cartOnItem.delete({
                    where: { id: itemId }
                });

                return res.json({
                    message: 'Item removed from cart'
                });
            } else {
                const updatedItem = await prisma.cartOnItem.update({
                    where: { id: itemId },
                    data: {
                        quantity: quantityNum
                    },
                    include: {
                        product: {
                            select: {
                                name: true,
                                price: true
                            }
                        }
                    }
                });

                return res.json({
                    message: 'Cart updated successfully',
                    item: updatedItem
                });
            }
        } catch (e) {
            console.error('Error updating cart item:', e);
            res.status(500).json({ message: 'Failed to update cart item', error: e.message });
        }
    },

    async removeCartItem(req, res) {
        try {
            const userId = req.user.id;
            const { itemId } = req.params;

            const cart = await prisma.cart.findUnique({
                where: { user_id: userId }
            });

            if (!cart) {
                return res.status(404).json({ message: 'Cart not found' });
            }

            const cartItem = await prisma.cartOnItem.findFirst({
                where: {
                    id: itemId,
                    cart_id: cart.id
                }
            });

            if (!cartItem) {
                return res.status(404).json({ message: 'Cart item not found' });
            }

            await prisma.cartOnItem.delete({
                where: { id: itemId }
            });

            res.json({ message: 'Item removed from cart' });
        } catch (e) {
            console.error('Error removing cart item:', e);
            res.status(500).json({ message: 'Failed to remove item from cart', error: e.message });
        }
    },

    async clearCart(req, res) {
        try {
            const userId = req.user.id;

            const cart = await prisma.cart.findUnique({
                where: { user_id: userId },
                include: {
                    cart_items: true
                }
            });

            if (!cart || cart.cart_items.length === 0) {
                return res.status(200).json({ message: 'Cart is already empty' });
            }

            await prisma.cartOnItem.deleteMany({
                where: {
                    cart_id: cart.id
                }
            });

            res.json({ message: 'Cart cleared successfully' });
        } catch (e) {
            console.error('Error clearing cart:', e);
            res.status(500).json({ message: 'Failed to clear cart', error: e.message });
        }
    }
};

module.exports = cartController;