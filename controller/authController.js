const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET;

const authController = {
    async register(req, res) {
        const { name, email, password } = req.body;

        try {
            const existingUser = await prisma.user.findUnique({
                where: { email }
            });

            if (existingUser) {
                return res.status(400).json({ message: 'User with this email already exists' });
            }

            const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);

            let regularTeam = await prisma.team.findFirst({
                where: { name: 'Regular' }
            });

            if (!regularTeam) {
                regularTeam = await prisma.team.create({
                    data: {
                        name: 'Regular',
                        slug: 'regular'
                    }
                })
            }

            const newUser = await prisma.user.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    team: {
                        connect: { id: regularTeam.id }
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    team: {
                        select: {
                            name: true
                        }
                    },
                    created_at: true
                }
            });

            res.status(201).json({
                message: 'User registered successfully',
                user: newUser
            });
        } catch (e) {
            console.error('Registration error: ', e);
            res.status(500).json({ message: 'Failed to register user', error: e.message })
        }
    },

    async login(req, res) {
        const { email, password } = req.body;

        try {
            const user = await prisma.user.findUnique({
                where: { email },
                include: {
                    team: {
                        select: {
                            name: true,
                            slug: true
                        }
                    }
                }
            });

            if (!user) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            const token = jwt.sign(
                {
                    userId: user.id,
                    email: user.email,
                    teamId: user.team_id,
                    teamName: user.team.name
                },
                JWT_SECRET,
                {
                    expiresIn: '24h'
                }
            );

            const { password: _, ...userWithoutPassword } = user;

            res.json({
                message: 'Login successful',
                user: userWithoutPassword,
                token
            });
        } catch (e) {
            console.error('Login error:', e);
            res.status(500).json({ message: 'Failed to login', error: e.message });
        }
    },

    async logout(req, res) {
        try {
            const header = req.headers.authorization;

            if (!header || !header.startsWith('Bearer ')) {
                return res.status(400).json({ message: 'No token provided' });
            }

            const token = header.split(' ')[1];

            try {
                const decoded = jwt.decode(token);
                if (!decoded || !decoded.exp) {
                    return res.status(400).json({ message: 'Invalid token format' });
                }

                const tokenHash = crypto.createHash('sha256').update(token).digest('hex');

                await prisma.tokenBlacklist.create({
                    data: {
                        token: token,
                        tokenHash: tokenHash,
                        expiresAt: new Date(decoded.exp * 1000)
                    }
                });
                return res.status(200).json({ message: 'Logged out successfully' });
            } catch (e) {
                if (r instanceof jwt.JsonWebTokenError) {
                    const oneYear = new Date();
                    oneYear.setFullYear(oneYear.getFullYear() + 1);

                    await prisma.tokenBlacklist.create({
                        data: {
                            token: token,
                            expiresAt: oneYear
                        }
                    });
                    return res.status(200).json({ message: 'Logged out successfully' });
                }
                throw e;
            }
        } catch (e) {
            console.error('Logout error:', e);
            res.status(500).json({ message: 'Failed to logout', error: e.message });
        }
    }
};

module.exports = authController;