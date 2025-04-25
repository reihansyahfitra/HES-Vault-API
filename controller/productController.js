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

}