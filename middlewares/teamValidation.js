const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const validateTeamCreate = async (req, res, next) => {
    const { name, slug } = req.body;
    const errors = [];

    // Name validation
    if (!name || name.trim() === '') {
        errors.push('Team name is required');
    }

    // Slug validation
    if (!slug || slug.trim() === '') {
        errors.push('Team slug is required');
    } else {
        // Check if slug is alphanumeric with hyphens only
        const slugRegex = /^[a-z0-9-]+$/;
        if (!slugRegex.test(slug)) {
            errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
        }

        // Check if slug already exists
        try {
            const existingTeam = await prisma.team.findUnique({
                where: { slug }
            });

            if (existingTeam) {
                errors.push('A team with this slug already exists');
            }
        } catch (error) {
            console.error('Error checking for existing slug:', error);
            return res.status(500).json({
                message: 'Error validating team data',
                error: error.message
            });
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

const validateTeamUpdate = async (req, res, next) => {
    const { name, slug } = req.body;
    const { id } = req.params;
    const errors = [];

    // Check if at least one field is being updated
    if ((!name || name.trim() === '') && (!slug || slug.trim() === '')) {
        errors.push('At least one field (name or slug) must be provided for update');
    }

    // Slug validation (if provided)
    if (slug && slug.trim() !== '') {
        // Check if slug is alphanumeric with hyphens only
        const slugRegex = /^[a-z0-9-]+$/;
        if (!slugRegex.test(slug)) {
            errors.push('Slug must contain only lowercase letters, numbers, and hyphens');
        }

        // Check if slug already exists but belongs to another team
        try {
            const existingTeam = await prisma.team.findUnique({
                where: { slug }
            });

            if (existingTeam && existingTeam.id !== id) {
                errors.push('A team with this slug already exists');
            }
        } catch (error) {
            console.error('Error checking for existing slug:', error);
            return res.status(500).json({
                message: 'Error validating team data',
                error: error.message
            });
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

module.exports = {
    validateTeamCreate,
    validateTeamUpdate
};