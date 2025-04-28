const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

async function main() {
  console.log('🌱 Starting seed...');

  // ============= TEAMS =============
  console.log('Creating teams...');

  const adminTeam = await prisma.team.upsert({
    where: { slug: 'administrator' },
    update: {},
    create: {
      name: 'Administrator',
      slug: 'administrator',
    },
  });

  const labManagerTeam = await prisma.team.upsert({
    where: { slug: 'lab-manager' },
    update: {},
    create: {
      name: 'Lab Manager',
      slug: 'lab-manager',
    },
  });

  const studentTeam = await prisma.team.upsert({
    where: { slug: 'student' },
    update: {},
    create: {
      name: 'Student',
      slug: 'student',
    },
  });

  const facultyTeam = await prisma.team.upsert({
    where: { slug: 'faculty' },
    update: {},
    create: {
      name: 'Faculty',
      slug: 'faculty',
    },
  });

  console.log('✅ Teams created successfully');

  // ============= USERS =============
  console.log('Creating users...');

  // Admin User
  const adminPassword = await bcrypt.hash('Admin@123', SALT_ROUNDS);
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {
      team: { connect: { id: adminTeam.id } }
    },
    create: {
      name: 'Admin User',
      email: 'admin@example.com',
      password: adminPassword,
      team: { connect: { id: adminTeam.id } }
    },
  });

  // Lab Manager
  const labManagerPassword = await bcrypt.hash('Manager@123', SALT_ROUNDS);
  const labManager = await prisma.user.upsert({
    where: { email: 'manager@example.com' },
    update: {
      team: { connect: { id: labManagerTeam.id } }
    },
    create: {
      name: 'Lab Manager',
      email: 'manager@example.com',
      password: labManagerPassword,
      team: { connect: { id: labManagerTeam.id } }
    },
  });

  // Student Users
  const studentPassword = await bcrypt.hash('Student@123', SALT_ROUNDS);
  const students = [];

  for (let i = 1; i <= 5; i++) {
    const student = await prisma.user.upsert({
      where: { email: `student${i}@example.com` },
      update: {
        team: { connect: { id: studentTeam.id } }
      },
      create: {
        name: `Student ${i}`,
        email: `student${i}@example.com`,
        password: studentPassword,
        team: { connect: { id: studentTeam.id } }
      },
    });
    students.push(student);
  }

  // Faculty Users
  const facultyPassword = await bcrypt.hash('Faculty@123', SALT_ROUNDS);
  const faculties = [];

  for (let i = 1; i <= 3; i++) {
    const faculty = await prisma.user.upsert({
      where: { email: `faculty${i}@example.com` },
      update: {
        team: { connect: { id: facultyTeam.id } }
      },
      create: {
        name: `Faculty ${i}`,
        email: `faculty${i}@example.com`,
        password: facultyPassword,
        team: { connect: { id: facultyTeam.id } }
      },
    });
    faculties.push(faculty);
  }

  console.log('✅ Users created successfully');

  // ============= CATEGORIES =============
  console.log('Creating product categories...');

  const categories = [
    { name: 'Microcontrollers', slug: 'microcontrollers' },
    { name: 'Sensors', slug: 'sensors' },
    { name: 'Actuators', slug: 'actuators' },
    { name: 'Communication Modules', slug: 'communication-modules' },
    { name: 'Power Supplies', slug: 'power-supplies' },
    { name: 'Cables & Connectors', slug: 'cables-connectors' },
    { name: 'Display Modules', slug: 'display-modules' },
    { name: 'Development Boards', slug: 'development-boards' },
    { name: 'Tools', slug: 'tools' },
    { name: 'Miscellaneous', slug: 'miscellaneous' }
  ];

  const createdCategories = [];

  for (const category of categories) {
    const createdCategory = await prisma.category.upsert({
      where: { slug: category.slug },
      update: {},
      create: category,
    });
    createdCategories.push(createdCategory);
  }

  console.log('✅ Categories created successfully');

  // ============= PRODUCTS =============
  console.log('Creating products based on available images...');

  // Helper to get category by slug
  const getCategoryBySlug = (slug) => {
    return createdCategories.find(cat => cat.slug === slug);
  };

  // Products based on available images in uploads/product/
  const products = [
    {
      name: 'Arduino',
      slug: 'arduino',
      brand: 'Arduino',
      price: 25000,
      quantity: 20,
      quantity_alert: 5,
      description: 'Arduino microcontroller board for electronics projects',
      specifications: 'Microcontroller: ATmega328P, Operating Voltage: 5V, Digital I/O Pins: 14',
      source: 'Purchase',
      date_arrival: new Date('2023-01-15'),
      is_rentable: true,
      product_picture: '/uploads/product/arduino.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('microcontrollers').id
    },
    {
      name: 'Arduino Cable',
      slug: 'arduino-cable',
      brand: 'Arduino',
      price: 12000,
      quantity: 30,
      quantity_alert: 5,
      description: 'USB cable for connecting Arduino boards to computers',
      specifications: 'USB-A to USB-B, Length: 50cm, Compatible with Arduino Uno, Mega, Leonardo',
      source: 'Purchase',
      date_arrival: new Date('2023-01-20'),
      is_rentable: true,
      product_picture: '/uploads/product/arduinocable.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('cables-connectors').id
    },
    {
      name: 'Breadboard',
      slug: 'breadboard',
      brand: 'Generic',
      price: 25000,
      quantity: 20,
      quantity_alert: 5,
      description: 'Solderless breadboard for electronic prototyping',
      specifications: 'Size: 830 tie points, Material: ABS plastic, Color: White',
      source: 'Purchase',
      date_arrival: new Date('2023-01-25'),
      is_rentable: true,
      product_picture: '/uploads/product/breadboard.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('miscellaneous').id
    },
    {
      name: 'Connection Cable',
      slug: 'connection-cable',
      brand: 'Generic',
      price: 15000,
      quantity: 30,
      quantity_alert: 10,
      description: 'Multi-purpose connection cable for electronics projects',
      specifications: 'Type: General purpose, Length: Various, Connectors: Multiple types',
      source: 'Purchase',
      date_arrival: new Date('2023-02-01'),
      is_rentable: true,
      product_picture: '/uploads/product/cable.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('cables-connectors').id
    },
    {
      name: 'DC Motor',
      slug: 'dc-motor',
      brand: 'Generic',
      price: 30000,
      quantity: 15,
      quantity_alert: 3,
      description: 'DC motor for robotics and mechatronics projects',
      specifications: 'Operating Voltage: 3-6V DC, RPM: ~6000 at 6V, Shaft Diameter: 2mm',
      source: 'Purchase',
      date_arrival: new Date('2023-02-05'),
      is_rentable: true,
      product_picture: '/uploads/product/dcmotor.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('actuators').id
    },
    {
      name: 'DHT11 Temperature & Humidity Sensor',
      slug: 'dht11-temperature-humidity-sensor',
      brand: 'Generic',
      price: 15000,
      quantity: 30,
      quantity_alert: 5,
      description: 'Digital temperature and humidity sensor for environmental monitoring',
      specifications: 'Power supply: 3-5V DC, Temperature Range: 0-50℃, Humidity Range: 20-90%RH',
      source: 'Purchase',
      date_arrival: new Date('2023-02-10'),
      is_rentable: true,
      product_picture: '/uploads/product/dht11.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    },
    {
      name: 'ESP32 Development Board',
      slug: 'esp32-development-board',
      brand: 'Espressif',
      price: 45000,
      quantity: 15,
      quantity_alert: 3,
      description: 'ESP32 WiFi & Bluetooth IoT development board',
      specifications: 'Microcontroller: ESP32, WiFi: 802.11 b/g/n, Bluetooth: v4.2 BLE, GPIO: 36 pins',
      source: 'Purchase',
      date_arrival: new Date('2023-02-15'),
      is_rentable: true,
      product_picture: '/uploads/product/esp32.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('microcontrollers').id
    },
    {
      name: 'ESP8266 NodeMCU',
      slug: 'esp8266-nodemcu',
      brand: 'Espressif',
      price: 40000,
      quantity: 20,
      quantity_alert: 5,
      description: 'ESP8266 WiFi development board for IoT applications',
      specifications: 'Microcontroller: ESP8266, WiFi: 802.11 b/g/n, GPIO: 11 pins, Operating voltage: 3.3V',
      source: 'Purchase',
      date_arrival: new Date('2023-02-20'),
      is_rentable: true,
      product_picture: '/uploads/product/esp8266.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('microcontrollers').id
    },
    {
      name: 'Ethernet Shield',
      slug: 'ethernet-shield',
      brand: 'Arduino',
      price: 85000,
      quantity: 10,
      quantity_alert: 2,
      description: 'Arduino Ethernet shield for network connectivity',
      specifications: 'Ethernet Controller: W5100, Network Speed: 10/100Mb, Compatible with Arduino Uno',
      source: 'Purchase',
      date_arrival: new Date('2023-02-25'),
      is_rentable: true,
      product_picture: '/uploads/product/ethernetshield.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('development-boards').id
    },
    {
      name: 'FTDI Adapter',
      slug: 'ftdi-adapter',
      brand: 'FTDI',
      price: 35000,
      quantity: 15,
      quantity_alert: 3,
      description: 'USB to TTL Serial adapter for programming microcontrollers',
      specifications: 'Interface: USB to TTL Serial, Voltage: 3.3V/5V selectable, Chipset: FT232RL',
      source: 'Purchase',
      date_arrival: new Date('2023-03-01'),
      is_rentable: true,
      product_picture: '/uploads/product/ftdi.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('cables-connectors').id
    },
    {
      name: 'Gyroscope Sensor',
      slug: 'gyroscope-sensor',
      brand: 'Generic',
      price: 28000,
      quantity: 12,
      quantity_alert: 3,
      description: 'Gyroscope sensor for motion detection applications',
      specifications: 'Model: MPU6050, Interface: I2C, Operating voltage: 3.3-5V',
      source: 'Purchase',
      date_arrival: new Date('2023-03-05'),
      is_rentable: true,
      product_picture: '/uploads/product/gyroscope.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    },
    {
      name: 'HC-05 Bluetooth Module',
      slug: 'hc-05-bluetooth-module',
      brand: 'Generic',
      price: 35000,
      quantity: 15,
      quantity_alert: 3,
      description: 'Bluetooth serial module for wireless communication',
      specifications: 'Bluetooth Protocol: v2.0+EDR, Operating Voltage: 3.3-6V, Range: ~10m',
      source: 'Purchase',
      date_arrival: new Date('2023-03-10'),
      is_rentable: true,
      product_picture: '/uploads/product/hc05.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('communication-modules').id
    },
    {
      name: 'Humidity Sensor',
      slug: 'humidity-sensor',
      brand: 'Generic',
      price: 18000,
      quantity: 20,
      quantity_alert: 4,
      description: 'Sensor for measuring relative humidity in the environment',
      specifications: 'Type: Capacitive, Range: 0-100% RH, Accuracy: ±5% RH, Operating Voltage: 3.3-5V',
      source: 'Purchase',
      date_arrival: new Date('2023-03-15'),
      is_rentable: true,
      product_picture: '/uploads/product/humidity.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    },
    {
      name: 'Jumper Wires',
      slug: 'jumper-wires',
      brand: 'Generic',
      price: 15000,
      quantity: 30,
      quantity_alert: 10,
      description: 'Set of jumper wires for breadboard and prototyping connections',
      specifications: 'Pack of 40 wires, Length: 20cm, Types: Male-to-Male, Various colors',
      source: 'Purchase',
      date_arrival: new Date('2023-03-20'),
      is_rentable: true,
      product_picture: '/uploads/product/jumper.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('cables-connectors').id
    },
    {
      name: 'Jumper Cable Pack',
      slug: 'jumper-cable-pack',
      brand: 'Generic',
      price: 25000,
      quantity: 20,
      quantity_alert: 5,
      description: 'Complete pack of jumper cables in various configurations',
      specifications: 'Pack of 120 cables, Types: Male-to-Male, Male-to-Female, Female-to-Female, Length: 10cm, 20cm',
      source: 'Purchase',
      date_arrival: new Date('2023-03-25'),
      is_rentable: true,
      product_picture: '/uploads/product/jumpercable.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('cables-connectors').id
    },
    {
      name: 'LDR Light Sensor',
      slug: 'ldr-light-sensor',
      brand: 'Generic',
      price: 8000,
      quantity: 50,
      quantity_alert: 10,
      description: 'Light Dependent Resistor for light intensity detection',
      specifications: 'Type: Photoresistor, Resistance Range: 1KΩ (bright) - 10MΩ (dark)',
      source: 'Purchase',
      date_arrival: new Date('2023-04-01'),
      is_rentable: true,
      product_picture: '/uploads/product/ldr.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    },
    {
      name: 'Light Sensor Module',
      slug: 'light-sensor-module',
      brand: 'Generic',
      price: 12000,
      quantity: 30,
      quantity_alert: 5,
      description: 'Digital light sensor module with onboard comparator',
      specifications: 'Type: LDR with comparator, Output: Digital and Analog, Operating Voltage: 3.3-5V',
      source: 'Purchase',
      date_arrival: new Date('2023-04-05'),
      is_rentable: true,
      product_picture: '/uploads/product/lightsensor.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    },
    {
      name: 'Micro USB Cable',
      slug: 'micro-usb-cable',
      brand: 'Generic',
      price: 18000,
      quantity: 25,
      quantity_alert: 5,
      description: 'Micro USB cable for power and data connections',
      specifications: 'Type: USB-A to Micro-USB, Length: 1m, Data Transfer: USB 2.0',
      source: 'Purchase',
      date_arrival: new Date('2023-04-10'),
      is_rentable: true,
      product_picture: '/uploads/product/microusb.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('cables-connectors').id
    },
    {
      name: 'MQ-2 Gas Sensor',
      slug: 'mq2-gas-sensor',
      brand: 'Generic',
      price: 22000,
      quantity: 15,
      quantity_alert: 3,
      description: 'Gas sensor for detecting combustible gases and smoke',
      specifications: 'Detects: LPG, Propane, Hydrogen, Methane, Smoke, Operating Voltage: 5V',
      source: 'Purchase',
      date_arrival: new Date('2023-04-15'),
      is_rentable: true,
      product_picture: '/uploads/product/mq2.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    },
    {
      name: 'Raspberry Pi',
      slug: 'raspberry-pi',
      brand: 'Raspberry Pi',
      price: 350000,
      quantity: 8,
      quantity_alert: 2,
      description: 'Single-board computer for various computing and electronics projects',
      specifications: 'Model: Pi 4B, RAM: 4GB, CPU: Quad-core Cortex-A72 (ARM v8) 1.5GHz, WiFi: 802.11ac',
      source: 'Purchase',
      date_arrival: new Date('2023-04-20'),
      is_rentable: true,
      product_picture: '/uploads/product/rasberrypi.png',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('microcontrollers').id
    },
    {
      name: 'Relay Module',
      slug: 'relay-module',
      brand: 'Generic',
      price: 20000,
      quantity: 20,
      quantity_alert: 4,
      description: 'Relay module for controlling high voltage devices with microcontrollers',
      specifications: 'Channels: 1, Operating Voltage: 5V, Contact Rating: 10A 250VAC/30VDC',
      source: 'Purchase',
      date_arrival: new Date('2023-04-25'),
      is_rentable: true,
      product_picture: '/uploads/product/relay.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('actuators').id
    },
    {
      name: 'Temperature Sensor',
      slug: 'temperature-sensor',
      brand: 'Generic',
      price: 15000,
      quantity: 30,
      quantity_alert: 5,
      description: 'Digital temperature sensor for accurate temperature measurements',
      specifications: 'Model: DS18B20, Range: -55°C to +125°C, Accuracy: ±0.5°C, Interface: 1-Wire',
      source: 'Purchase',
      date_arrival: new Date('2023-05-01'),
      is_rentable: true,
      product_picture: '/uploads/product/temperaturesensor.jpg',
      user_id: adminUser.id,
      category_id: getCategoryBySlug('sensors').id
    }
  ];

  // Create all products
  for (const product of products) {
    const createdProduct = await prisma.product.create({
      data: product
    });
    console.log(`Created product: ${createdProduct.name}`);
  }

  console.log('✅ Products created successfully');

  // ============= CARTS =============
  console.log('Creating carts for users...');

  // Create carts for all student users
  for (const student of students) {
    await prisma.cart.create({
      data: {
        user: {
          connect: { id: student.id }
        }
      }
    });
  }

  // Add some items to student1's cart
  const student1Cart = await prisma.cart.findUnique({
    where: { user_id: students[0].id }
  });

  // Get some products to add to cart
  const arduino = await prisma.product.findUnique({
    where: { slug: 'arduino' }
  });

  const jumperWires = await prisma.product.findUnique({
    where: { slug: 'jumper-wires' }
  });

  const breadboard = await prisma.product.findUnique({
    where: { slug: 'breadboard' }
  });

  // Add items to student1's cart
  if (student1Cart && arduino && jumperWires && breadboard) {
    await prisma.cartOnItem.create({
      data: {
        cart: { connect: { id: student1Cart.id } },
        product: { connect: { id: arduino.id } },
        quantity: 1
      }
    });

    await prisma.cartOnItem.create({
      data: {
        cart: { connect: { id: student1Cart.id } },
        product: { connect: { id: jumperWires.id } },
        quantity: 1
      }
    });

    await prisma.cartOnItem.create({
      data: {
        cart: { connect: { id: student1Cart.id } },
        product: { connect: { id: breadboard.id } },
        quantity: 1
      }
    });
  }

  console.log('✅ Carts created successfully');

  // ============= RENTALS =============
  console.log('Creating sample rentals...');

  // Create some sample rentals with orders
  const createRental = async (user, products, startDate, endDate, orderStatus, paymentStatus) => {
    // Create the rent
    const rent = await prisma.rent.create({
      data: {
        id: uuidv4(),
        user: {
          connect: { id: user.id }
        },
        identification: `ID-${Math.floor(Math.random() * 1000000)}`,
        phone: `+62812${Math.floor(Math.random() * 100000000)}`,
        notes: 'Sample rental created by seed script',
        identification_picture: '/uploads/rent/sample-id.jpg'
      }
    });

    // Calculate total cost
    const totalCost = products.reduce((sum, p) => sum + (p.price * p.quantity), 0);

    // Create order
    const order = await prisma.order.create({
      data: {
        id: uuidv4(),
        rent: {
          connect: { id: rent.id }
        },
        invoice: `INV-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
        start_date: startDate,
        end_date: endDate,
        total_cost: totalCost,
        order_status: orderStatus,
        payment_status: paymentStatus,
        products: {
          create: products.map(p => ({
            product: {
              connect: { id: p.id }
            },
            quantity: p.quantity,
            price: p.price
          }))
        }
      }
    });

    console.log(`Created rental: ${order.invoice} (${orderStatus})`);

    return { rent, order };
  };

  // Create WAITING rental for student1
  await createRental(
    students[0],
    [
      { id: arduino.id, price: arduino.price, quantity: 1 },
      { id: breadboard.id, price: breadboard.price, quantity: 1 }
    ],
    new Date(Date.now() + 86400000), // tomorrow
    new Date(Date.now() + 86400000 * 7), // 7 days later
    'WAITING',
    'UNPAID'
  );

  // Create APPROVED rental for student2
  const esp32 = await prisma.product.findUnique({
    where: { slug: 'esp32-development-board' }
  });

  const dht11 = await prisma.product.findUnique({
    where: { slug: 'dht11-temperature-humidity-sensor' }
  });

  await createRental(
    students[1],
    [
      { id: esp32.id, price: esp32.price, quantity: 1 },
      { id: dht11.id, price: dht11.price, quantity: 2 }
    ],
    new Date(Date.now() + 86400000), // tomorrow
    new Date(Date.now() + 86400000 * 5), // 5 days later
    'APPROVED',
    'PAID'
  );

  // Create ONRENT rental for student3
  const raspi = await prisma.product.findUnique({
    where: { slug: 'raspberry-pi' }
  });

  const sensor = await prisma.product.findUnique({
    where: { slug: 'light-sensor-module' }
  });

  await createRental(
    students[2],
    [
      { id: raspi.id, price: raspi.price, quantity: 1 },
      { id: sensor.id, price: sensor.price, quantity: 1 }
    ],
    new Date(Date.now() - 86400000 * 2), // 2 days ago
    new Date(Date.now() + 86400000 * 5), // 5 days later
    'ONRENT',
    'PAID'
  );

  // Create RETURNED rental for student4
  const esp8266 = await prisma.product.findUnique({
    where: { slug: 'esp8266-nodemcu' }
  });

  await createRental(
    students[3],
    [
      { id: esp8266.id, price: esp8266.price, quantity: 1 }
    ],
    new Date(Date.now() - 86400000 * 10), // 10 days ago
    new Date(Date.now() - 86400000 * 3), // 3 days ago
    'RETURNED',
    'PAID'
  );

  // Create REJECTED rental for student5
  const mq2 = await prisma.product.findUnique({
    where: { slug: 'mq2-gas-sensor' }
  });

  await createRental(
    students[4],
    [
      { id: mq2.id, price: mq2.price, quantity: 1 }
    ],
    new Date(Date.now() - 86400000 * 5), // 5 days ago
    new Date(Date.now() + 86400000 * 2), // 2 days later
    'REJECTED',
    'UNPAID'
  );

  console.log('✅ Rentals created successfully');

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