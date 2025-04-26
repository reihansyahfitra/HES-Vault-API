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

            const slug = slugify(name, {
                lower: true,
                strict: true
            });

            const existingProduct = await prisma.product.findUnique({
                where: { slug }
            });

            if (existingProduct) {
                return res.status(400).json({ message: 'A product with this name already exists' });
            }

            const newProduct = await prisma.product.create({
                data: {
                    name,
                    slug,
                    price: parseFloat(price),
                    quantity: parseInt(quantity),
                    quantity_alert: parseInt(quantity_alert),
                    brand,
                    description,
                    specifications,
                    source,
                    date_arrival: new Date(date_arrival),
                    is_rentable: Boolean(is_rentable),
                    product_picture,
                    user: {
                        connect: { id: req.user.id }
                    },
                    category: {
                        connect: { id: category_id }
                    }
                },
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

            res.status(201).json(newProduct);
        } catch (e) {
            console.error('Error creating product:', e);
            res.status(500).json({ message: 'Failed to create product', error: e.message });
        }
    },

    async updateProduct(req, res) {
        try {
            const { id } = req.params;
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

            const product = await prisma.product.findUnique({
                where: { id },
                include: { user: true }
            });

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            const updateData = {};

            if (name) {
                updateData.name = name;
                const newSlug = slugify(name, { lower: true, strict: true });

                if (newSlug !== product.slug) {
                    const existingProduct = await prisma.product.findUnique({
                        where: { slug: newSlug }
                    });

                    if (existingProduct && existingProduct.id !== id) {
                        return res.status(400).json({ message: 'A product with this name already exists' });
                    }

                    updateData.slug = newSlug;
                }
            }

            if (category_id) updateData.category = { connect: { id: category_id } };
            if (price !== undefined) updateData.price = parseFloat(price);
            if (quantity !== undefined) updateData.quantity = parseInt(quantity);
            if (quantity_alert !== undefined) updateData.quantity_alert = parseInt(quantity_alert);
            if (brand) updateData.brand = brand;
            if (description) updateData.description = description;
            if (specifications) updateData.specifications = specifications;
            if (source) updateData.source = source;
            if (date_arrival) updateData.date_arrival = new Date(date_arrival);
            if (is_rentable !== undefined) updateData.is_rentable = Boolean(is_rentable);
            if (product_picture) updateData.product_picture = product_picture;

            const updatedProduct = await prisma.product.update({
                where: { id },
                data: updateData,
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

            res.json(updatedProduct);
        } catch (e) {
            console.error('Error updating product:', e);
            res.status(500).json({ message: 'Failed to update product', error: e.message });
        }
    },


}