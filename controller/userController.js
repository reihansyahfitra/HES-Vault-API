const { PrismaClient } = require('../generated/prisma');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();
const SALT_ROUNDS = 10;

const usersController = {
    async getAllUsers(req, res) {
        try {
            const { search, page = 1, limit = 10, sort = 'name', order = 'asc', team } = req.query;
            const skip = (parseInt(page) - 1) * parseInt(limit);
            const take = parseInt(limit);

            console.log("Query params:", req.query);

            let where = {};

            if (search) {
                where.OR = [
                    { name: { contains: search.toLowerCase() } },
                    { email: { contains: search.toLowerCase() } }
                ];
            }

            if (team && team !== 'all') {
                where.team = {
                    slug: team
                };
            }

            const users = await prisma.user.findMany({
                where,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile_picture: true,
                    team: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    created_at: true
                },
                orderBy: {
                    [sort]: order
                },
                skip,
                take
            });

            const total = await prisma.user.count({ where });

            res.json({
                data: users,
                pagination: {
                    total,
                    page: parseInt(page),
                    limit: parseInt(limit),
                    pages: Math.ceil(total / parseInt(limit))
                }
            });
        } catch (e) {
            console.error('Error fetching users:', e);
            res.status(500).json({ message: 'Failed to fetch users', error: e.message });
        }
    },

    async getUserById(req, res) {
        try {
            const { id } = req.params;

            const user = await prisma.user.findUnique({
                where: { id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile_picture: true,
                    team: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    created_at: true
                }
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Check if user is requesting their own info or is an admin
            const isOwnProfile = user.id === req.user.id;
            const currentUser = await prisma.user.findUnique({
                where: { id: req.user.id },
                include: { team: true }
            });

            const isAdmin = currentUser.team.slug === 'administrator';

            if (!isOwnProfile && !isAdmin) {
                return res.status(403).json({ message: 'Not authorized to view this user profile' });
            }

            res.json(user);
        } catch (e) {
            console.error('Error fetching user:', e);
            res.status(500).json({ message: 'Failed to fetch user', error: e.message });
        }
    },

    async getCurrentUser(req, res) {
        try {
            const userId = req.user.id;

            const user = await prisma.user.findUnique({
                where: { id: userId },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile_picture: true,
                    team: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    created_at: true
                }
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            res.json(user);
        } catch (e) {
            console.error('Error fetching current user:', e);
            res.status(500).json({ message: 'Failed to fetch current user', error: e.message });
        }
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const { name, email, password, profile_picture, team_id } = req.body;

            // Check if user exists
            const userToUpdate = await prisma.user.findUnique({
                where: { id },
                include: { team: true }
            });

            if (!userToUpdate) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Get current user for permission checks
            const currentUser = await prisma.user.findUnique({
                where: { id: req.user.id },
                include: { team: true }
            });

            const isOwnProfile = id === req.user.id;
            const isAdmin = currentUser.team.slug === 'administrator';

            // Only allow users to update their own profile or admins to update any profile
            if (!isOwnProfile && !isAdmin) {
                return res.status(403).json({ message: 'Not authorized to update this user profile' });
            }

            // Only admins can update team
            if (team_id && !isAdmin) {
                return res.status(403).json({ message: 'Not authorized to change team assignment' });
            }

            // If updating email, check if it's already taken
            if (email && email !== userToUpdate.email) {
                const emailExists = await prisma.user.findUnique({
                    where: { email }
                });

                if (emailExists) {
                    return res.status(400).json({ message: 'Email already in use' });
                }
            }

            // Prepare update data
            const updateData = {};

            if (name) updateData.name = name;
            if (email) updateData.email = email;
            if (profile_picture) updateData.profile_picture = profile_picture;

            // Only hash password if it's provided
            if (password) {
                updateData.password = await bcrypt.hash(password, SALT_ROUNDS);
            }

            // Only add team connection if team_id is provided and user is admin
            if (team_id && isAdmin) {
                const team = await prisma.team.findUnique({
                    where: { id: team_id }
                });

                if (!team) {
                    return res.status(404).json({ message: 'Team not found' });
                }

                updateData.team = { connect: { id: team_id } };
            }

            // Update user
            const updatedUser = await prisma.user.update({
                where: { id },
                data: updateData,
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile_picture: true,
                    team: {
                        select: {
                            id: true,
                            name: true,
                            slug: true
                        }
                    },
                    created_at: true,
                    updated_at: true
                }
            });

            res.json({
                message: 'User updated successfully',
                user: updatedUser
            });
        } catch (e) {
            console.error('Error updating user:', e);
            res.status(500).json({ message: 'Failed to update user', error: e.message });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;

            // Only admins can delete users
            const currentUser = await prisma.user.findUnique({
                where: { id: req.user.id },
                include: { team: true }
            });

            const isAdmin = currentUser.team.slug === 'administrator';

            if (!isAdmin) {
                return res.status(403).json({ message: 'Not authorized to delete users' });
            }

            const user = await prisma.user.findUnique({
                where: { id }
            });

            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Prevent deleting your own account as admin
            if (user.id === req.user.id) {
                return res.status(400).json({ message: 'Cannot delete your own account' });
            }

            // Check if user has associated data
            // This example checks for rents, orders, and products tied to user
            const userRents = await prisma.rent.count({
                where: { user_id: id }
            });

            if (userRents > 0) {
                return res.status(400).json({
                    message: 'Cannot delete user with existing rents',
                    rentCount: userRents
                });
            }

            // Delete user
            await prisma.user.delete({
                where: { id }
            });

            res.json({ message: 'User deleted successfully' });
        } catch (e) {
            console.error('Error deleting user:', e);
            res.status(500).json({ message: 'Failed to delete user', error: e.message });
        }
    },

    async getUserStats(req, res) {
        try {
            // Get total users count
            const totalUsers = await prisma.user.count();

            // Get count by team
            const teamStats = await prisma.team.findMany({
                select: {
                    id: true,
                    name: true,
                    slug: true,
                    _count: {
                        select: {
                            user: true
                        }
                    }
                }
            });

            // Format response
            const teamCounts = {};
            teamStats.forEach(team => {
                teamCounts[team.slug] = {
                    count: team._count.user,
                    name: team.name
                };
            });

            res.json({
                total: totalUsers,
                teamCounts
            });
        } catch (e) {
            console.error('Error getting user stats:', e);
            res.status(500).json({ message: 'Failed to get user statistics' });
        }
    }
};

module.exports = usersController;