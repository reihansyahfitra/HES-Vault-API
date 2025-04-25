const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const isAdmin = async (req, res, next) => {
    try {
        if (!req.user) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const user = await prisma.user.findUnique({
            where: { id: req.user.id },
            include: {
                team: true
            }
        });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        if (user.team.slug !== 'administrator') {
            return res.status(403).json({
                message: 'Access denied',
                details: 'Only administrators can perform this action'
            });
        }

        next();
    } catch (e) {
        console.error('Admin authorization error:', e);
        res.status(500).json({ message: 'Authorization check failed', error: e.message });
    }
}

module.exports = { isAdmin };