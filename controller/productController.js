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
        }
    }
}