const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const { PrismaClient } = require('../generated/prisma');

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET;

const authenticate = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader || !authHeader.startsWith('Bearer ')) {
            return res.status(401).json({ message: 'Authentication required' });
        }

        const token = authHeader.split(' ')[1];
        const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

        if (!token) {
            return res.status(401).json({ message: 'Authentication token required' });
        }

        const blacklist = await prisma.tokenBlacklist.findUnique({
            where: { tokenHash }
        });

        if(blacklist){
            return res.status(401).json({ message: 'Token has been invalidated, please login again' });
        }

        const decoded = jwt.verify(token, JWT_SECRET);

        const user = await prisma.user.findUnique({
            where: { id: decoded.userId }
        });

        if (!user) {
            return res.status(401).json({ message: 'User no longer exists' });
        }

        req.user = {
            id: user.id,
            email: user.email,
            teamId: user.team_id
        };

        next();
    } catch (e) {
        if (e.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: 'Invalid token' });
        }
        if (e.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Token expired' });
        }
        console.error('Authentication error:', e);
        return res.status(500).json({ message: 'Authentication failed' });
    }
};

module.exports = { authenticate };