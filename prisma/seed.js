const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function main() {
  console.log('🌱 Starting seed...');

  // Create the Administrator team if it doesn't exist
  const adminTeam = await prisma.team.upsert({
    where: { slug: 'administrator' },
    update: {},
    create: {
      name: 'Administrator',
      slug: 'administrator',
    },
  });

  console.log(`✅ Created team: ${adminTeam.name} (${adminTeam.id})`);

  // Hash the password for the Admin user
  const hashedPassword = await bcrypt.hash('Admin@123', SALT_ROUNDS);

  // Create the Admin user if it doesn't exist
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {
      team: {
        connect: { id: adminTeam.id }
      }
    },
    create: {
      name: 'Admin',
      email: 'admin@example.com',
      password: hashedPassword,
      team: {
        connect: { id: adminTeam.id }
      }
    },
  });

  console.log(`✅ Created user: ${adminUser.name} (${adminUser.id})`);
  console.log('🌱 Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    // Close the Prisma client connection when done
    await prisma.$disconnect();
  });