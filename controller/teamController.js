const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const teamController = {
    // Get all teams
    async getAllTeams(req, res) {
        try {
            const { search, page = 1, limit = 10, sort = 'name', order = 'asc' } = req.query;

            const skip = (page - 1) * limit;
            const take = parseInt(limit);

            // Build the where clause for filtering
            const where = {};
            if (search) {
                where.OR = [
                    { name: { contains: search } },
                    { slug: { contains: search } }
                ];
            }

            // Get total count for pagination
            const totalTeams = await prisma.team.count({ where });
            const totalPages = Math.ceil(totalTeams / take) || 1;

            // Get the teams with pagination, sorting and filtering
            const teams = await prisma.team.findMany({
                where,
                skip,
                take,
                orderBy: {
                    [sort]: order.toLowerCase()
                },
                include: {
                    _count: {
                        select: { user: true }
                    }
                }
            });

            res.status(200).json({
                data: teams,
                pagination: {
                    totalItems: totalTeams,
                    totalPages,
                    currentPage: parseInt(page),
                    itemsPerPage: take
                }
            });
        } catch (error) {
            console.error('Error fetching teams:', error);
            res.status(500).json({
                message: 'Failed to retrieve teams',
                error: error.message
            });
        }
    },

    // Get a team by ID
    async getTeamById(req, res) {
        try {
            const { id } = req.params;

            const team = await prisma.team.findUnique({
                where: { id },
                include: {
                    _count: {
                        select: { user: true }
                    },
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true,
                            profile_picture: true,
                            created_at: true
                        },
                        take: 10
                    }
                }
            });

            if (!team) {
                return res.status(404).json({ message: 'Team not found' });
            }

            res.status(200).json({ data: team });
        } catch (error) {
            console.error('Error fetching team:', error);
            res.status(500).json({
                message: 'Failed to retrieve team',
                error: error.message
            });
        }
    },

    // Create a new team
    async createTeam(req, res) {
        try {
            const { name, slug } = req.body;

            const newTeam = await prisma.team.create({
                data: {
                    name,
                    slug: slug.toLowerCase()
                }
            });

            res.status(201).json({
                message: 'Team created successfully',
                data: newTeam
            });
        } catch (error) {
            console.error('Error creating team:', error);
            res.status(500).json({
                message: 'Failed to create team',
                error: error.message
            });
        }
    },

    // Update a team
    async updateTeam(req, res) {
        try {
            const { id } = req.params;
            const { name, slug } = req.body;

            // Check if team exists
            const teamExists = await prisma.team.findUnique({
                where: { id }
            });

            if (!teamExists) {
                return res.status(404).json({ message: 'Team not found' });
            }

            // Prepare update data
            const updateData = {};
            if (name) updateData.name = name;
            if (slug) updateData.slug = slug.toLowerCase();

            // Update the team
            const updatedTeam = await prisma.team.update({
                where: { id },
                data: updateData
            });

            res.status(200).json({
                message: 'Team updated successfully',
                data: updatedTeam
            });
        } catch (error) {
            console.error('Error updating team:', error);
            res.status(500).json({
                message: 'Failed to update team',
                error: error.message
            });
        }
    },

    // Delete a team
    async deleteTeam(req, res) {
        try {
            const { id } = req.params;

            // Check if team exists
            const teamExists = await prisma.team.findUnique({
                where: { id },
                include: {
                    _count: {
                        select: { user: true }
                    }
                }
            });

            if (!teamExists) {
                return res.status(404).json({ message: 'Team not found' });
            }

            // Check if it's a protected team
            const protectedTeams = ['administrator', 'regular', 'staff'];
            if (protectedTeams.includes(teamExists.slug)) {
                return res.status(403).json({
                    message: 'Cannot delete a protected team',
                    details: 'Administrator, Regular, and Staff teams cannot be deleted'
                });
            }

            // Check if team has users
            if (teamExists._count.user > 0) {
                return res.status(409).json({
                    message: 'Cannot delete a team with users',
                    details: 'This team has users associated with it. Please reassign or delete these users first.'
                });
            }

            // Delete the team
            await prisma.team.delete({
                where: { id }
            });

            res.status(200).json({
                message: 'Team deleted successfully'
            });
        } catch (error) {
            console.error('Error deleting team:', error);
            res.status(500).json({
                message: 'Failed to delete team',
                error: error.message
            });
        }
    },

    // Get users in a team
    async getTeamUsers(req, res) {
        try {
            const { id } = req.params;
            const { page = 1, limit = 10, sort = 'name', order = 'asc' } = req.query;

            const skip = (page - 1) * parseInt(limit);
            const take = parseInt(limit);

            // Check if team exists
            const teamExists = await prisma.team.findUnique({
                where: { id }
            });

            if (!teamExists) {
                return res.status(404).json({ message: 'Team not found' });
            }

            // Count total users in team
            const totalUsers = await prisma.user.count({
                where: { team_id: id }
            });

            // Get users with pagination
            const users = await prisma.user.findMany({
                where: { team_id: id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile_picture: true,
                    created_at: true,
                    updated_at: true
                },
                skip,
                take,
                orderBy: {
                    [sort]: order.toLowerCase()
                }
            });

            res.status(200).json({
                data: users,
                pagination: {
                    totalItems: totalUsers,
                    totalPages: Math.ceil(totalUsers / take) || 1,
                    currentPage: parseInt(page),
                    itemsPerPage: take
                }
            });
        } catch (error) {
            console.error('Error fetching team users:', error);
            res.status(500).json({
                message: 'Failed to retrieve team users',
                error: error.message
            });
        }
    }
};

module.exports = teamController;