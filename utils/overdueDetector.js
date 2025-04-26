const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function detectOverdueRentals() {
    try {
        const today = new Date();

        const overdueRentals = await prisma.order.findMany({
            where: {
                end_date: {
                    lt: today
                },
                order_status: 'ONRENT'
            }
        });

        for (const rental of overdueRentals) {
            await prisma.order.update({
                where: { id: rental.id },
                data: { order_status: 'OVERDUE' }
            });

            console.log(`Rental ${rental.id} marked as OVERDUE (ended on ${rental.end_date})`);
        }

        console.log(`Detected ${overdueRentals.length} overdue rentals`);
    } catch (error) {
        console.error('Error detecting overdue rentals:', error);
    }
}

module.exports = { detectOverdueRentals };