const validateAddToCart = (req, res, next) => {
    const { productId, quantity } = req.body;
    const errors = [];

    if (!productId || productId.trim() === '') {
        errors.push('Product ID is required');
    }

    if (quantity !== undefined) {
        const quantityNum = parseInt(quantity);
        if (isNaN(quantityNum) || quantityNum < 1) {
            errors.push('Quantity must be a positive number');
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

const validateUpdateCartItem = (req, res, next) => {
    const { quantity } = req.body;
    const errors = [];

    if (quantity === undefined) {
        errors.push('Quantity is required');
    } else {
        const quantityNum = parseInt(quantity);
        if (isNaN(quantityNum) || quantityNum < 0) {
            errors.push('Quantity must be a non-negative number');
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

module.exports = {
    validateAddToCart,
    validateUpdateCartItem
};