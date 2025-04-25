const validateCategory = (req, res, next) => {
    const { name } = req.body;
    const errors = [];

    if (!name || name.trim() === '') {
        errors.push('Category name is required');
    } else if (name.length < 2) {
        errors.push('Category name must be at least 2 characters');
    } else if (name.length > 50) {
        errors.push('Category name cannot exceed 50 characters');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

module.exports = { validateCategory };