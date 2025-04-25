const { PrismaClient } = require('../generated/prisma');
const slugify = require('slugify');

const prisma = new PrismaClient();

const productController = {
    async getAllProducts(req, res) {
        try {
            const {
                search,
                category,
                page = 1,
                limit = 10,
                sort = 'name',
                order = 'asc'
            } = req.query;

            const skip = (page - 1) * parseInt(limit);
            const take = parseInt(limit);

            const where = {};

            if (search) {
                where.OR = [
                    { name: { contains: search } },
                    { description: { contains: search } },
                    { brand: { contains: search } }
                ];
            }

            if (category) {
                where.category = {
                    slug: category
                };
            }

            const products = await prisma.product.findMany({
                where,
                include: {
                    category: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                },
                orderBy: {
                    [sort]: order
                },
                skip,
                take
            });

            const total = await prisma.product.count({ where });

            res.json({
                data: products,
                pagination: {
                    total,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(total / parseInt(limit))
                }
            });
        } catch (e) {
            console.error('Error fetching products:', e);
            res.status(500).json({ message: 'Failed to fetch products', error: e.message });
        }
    },

    async getProductById(req, res) {
        try {
            const { id } = req.params;

            let product = await prisma.product.findUnique({
                where: { id },
                include: {
                    category: true,
                    user: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });

            if (!product) {
                product = await prisma.product.findUnique({
                    where: { slug: id },
                    include: {
                        category: true,
                        user: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                });

                if (!product) {
                    return res.status(404).json({ message: 'Product not found' });
                }
            }

            res.json(product);
        } catch (e) {
            console.error('Error fetching product:', e);
            res.status(500).json({ message: 'Failed to fetch product', error: e.message });
        }
    },

    async createProduct(req, res) {
        try {
            const {
                name,
                category_id,
                price,
                quantity,
                quantity_alert,
                brand,
                description,
                specifications,
                source,
                date_arrival,
                is_rentable,
                product_picture
            } = req.body;


        }
    }
}