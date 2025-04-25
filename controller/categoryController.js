const { PrismaClient } = require('../generated/prisma');
const slugify = require('slugify');

const prisma = new PrismaClient();

const categoryController = {
    async getAllCategories(req, res) {
        try {
            const categories = await prisma.category.findMany({
                orderBy: {
                    name: 'asc'
                },
                include: {
                    _count: {
                        select: {
                            product: true
                        }
                    }
                }
            });

            res.json(categories);
        } catch (e) {
            console.error('Error fetching categories:', error);
            res.status(500).json({ message: 'Failed to fetch categories', error: error.message });
        }
    },

    async getCategoryById(req, res) {
        try {
            const { id } = req.params;

            const category = await prisma.category.findUnique({
                where: {
                    id: id
                },
                include: {
                    product: {
                        include: {
                            category: true
                        },
                        orderBy: {
                            name: 'asc'
                        }
                    },
                    _count: {
                        select: {
                            product: true
                        }
                    }
                }
            });

            if (!category) {
                categoryBySlug = await prisma.category.findUnique({
                    where: {
                        slug: id
                    },
                    include: {
                        product: {
                            include: {
                                category: true
                            },
                            orderBy: {
                                name: 'asc'
                            }
                        },
                        _count: {
                            select: {
                                product: true
                            }
                        }
                    }
                });

                if (!categoryBySlug) {
                    return res.status(404).json({ message: 'Category not found' });
                }
        
                return res.json(categoryBySlug);
            }

            res.json(category);
        } catch (e) {
            console.error('Error fetching category:', error);
            res.status(500).json({ message: 'Failed to fetch category', error: error.message });
        }
    },

    async createCategory(req, res) {
        try {
            const { name } = req.body;

            if (!name || name.trim() === '') {
                return res.status(400).json({
                    message: 'Category name is required'
                });
            }

            const slug = slugify(name, {
                lower: true,
                strict: true
            });
            
            const existingCategory = await prisma.category.findUnique({
                where: { slug }
            });

            if (existingCategory) {
                return res.status(400).json({ message: 'A category with this name already exists' });
            }

            const newCategory = await prisma.category.create({
                data: {
                    name,
                    slug
                }
            });

            res.status(201).json(newCategory);
        } catch (e) {
            console.error('Error creating category:', error);
            res.status(500).json({ message: 'Failed to create category', error: error.message });
        }
    },

    async updateCategory(req, res) {
        try {
            const { id } = req.params;
            const { name } = req.body;

            if (!name || name.trim() === '') {
                return res.status(400).json({ message: 'Category name is required' });
            }

            const category = await prisma.category.findUnique({
                where: { id }
            });
            
            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }

            const slug = slugify(name, {
                lower: true,
                strict: true
            });

            if(slug !== category.slug) {
                const existingCategory = await prisma.category.findUnique({
                    where: { slug }
                });

                if (existingCategory) {
                    return res.status(400).json({ message: 'A category with this name already exists' });
                }
            }

            const updatedCategory = await prisma.category.update({
                where: { id },
                data: {
                    name,
                    slug
                }
            });

            res.json(updatedCategory);
        } catch (error) {
            console.error('Error updating category:', error);
            res.status(500).json({ message: 'Failed to update category', error: error.message });
        }
    },

    async deleteCategory(req, res) {
        try {
            const { id } = req.params;

            const category = await prisma.category.findUnique({
                where: { id },
                include: {
                    product: true
                }
            });

            if (!category) {
                return res.status(404).json({ message: 'Category not found' });
            }

            if (category.product.length > 0) {
                return res.status(400).json({
                    message: 'Cannot delete category that has products',
                    productCounts: category.product.length
                });
            }

            await prisma.category.delete({
                where: { id }
            });

            res.json({ message: 'Category deleted successfully' });
        } catch (e) {
            console.error('Error deleting category:', error);
            res.status(500).json({ message: 'Failed to delete category', error: error.message });
        }
    }
};

module.exports = categoryController;