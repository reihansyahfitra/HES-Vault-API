const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function cleanupExpiredTokens() {
    try {
        const result = await prisma.tokenBlacklist.deleteMany({
            where: {
                expiresAt: {
                    lt: new Date()
                }
            }
        });

        console.log(`Cleaned up ${result.count} expired tokens from blacklist`);
    } catch (e) {
        console.error('Failed to clean up expired tokens:', error);
    }
}

module.exports = { cleanupExpiredTokens };