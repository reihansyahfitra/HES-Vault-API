const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const validateProduct = async (req, res, next) => {
    const {
        name,
        category_id,
        price,
        quantity,
        quantity_alert,
        brand,
        description,
        specifications,
        source,
        date_arrival,
        is_rentable
    } = req.body;

    const errors = [];

    if (!name || name.trim() === '') {
        errors.push('Product name is required');
    } else if (name.length < 3) {
        errors.push('Product name must be at least 3 characters long');
    } else if (name.length > 100) {
        errors.push('Product name cannot exceed 100 characters');
    }

    if (!category_id || category_id.trim() === '') {
        errors.push('Category is required');
    } else {
        try {
            const category = await prisma.category.findUnique({
                where: { id: category_id }
            });

            if (!category) {
                errors.push('Invalid category selected');
            }
        } catch (error) {
            errors.push('Error validating category');
        }
    }

    if (price === undefined || price === null) {
        errors.push('Price is required');
    } else {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice) || numericPrice < 0) {
            errors.push('Price must be a positive number');
        }
    }

    if (quantity === undefined || quantity === null) {
        errors.push('Quantity is required');
    } else {
        const numericQuantity = parseInt(quantity);
        if (isNaN(numericQuantity) || numericQuantity < 0) {
            errors.push('Quantity must be a non-negative integer');
        }
    }

    if (quantity_alert === undefined || quantity_alert === null) {
        errors.push('Minimum quantity is required');
    } else {
        const numericQuantityAlert = parseInt(quantity_alert);
        if (isNaN(numericQuantityAlert) || numericQuantityAlert < 0) {
            errors.push('Minimum quantity must be a non-negative integer');
        }
    }

    if (!brand || brand.trim() === '') {
        errors.push('Brand is required');
    }

    if (!description || description.trim() === '') {
        errors.push('Description is required');
    }

    if (!specifications || specifications.trim() === '') {
        errors.push('Specifications are required');
    }

    if (!source || source.trim() === '') {
        errors.push('Source is required');
    }

    if (!date_arrival) {
        errors.push('Arrival date is required');
    } else {
        const arrivalDate = new Date(date_arrival);
        if (isNaN(arrivalDate.getTime())) {
            errors.push('Invalid arrival date format');
        }
    }

    if (is_rentable !== undefined && typeof is_rentable !== 'boolean' && is_rentable !== 'true' && is_rentable !== 'false' && is_rentable !== 1 && is_rentable !== 0) {
        errors.push('Is rentable must be a boolean value');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

const validateProductUpdate = async (req, res, next) => {
    const {
        name,
        category_id,
        price,
        quantity,
        quantity_alert,
        brand,
        description,
        specifications,
        source,
        date_arrival,
        is_rentable
    } = req.body;

    const errors = [];

    if (name !== undefined) {
        if (name.trim() === '') {
            errors.push('Product name cannot be empty');
        } else if (name.length < 3) {
            errors.push('Product name must be at least 3 characters long');
        } else if (name.length > 100) {
            errors.push('Product name cannot exceed 100 characters');
        }
    }

    if (category_id !== undefined) {
        if (category_id.trim() === '') {
            errors.push('Category cannot be empty');
        } else {
            // Check if category exists
            try {
                const category = await prisma.category.findUnique({
                    where: { id: category_id }
                });

                if (!category) {
                    errors.push('Invalid category selected');
                }
            } catch (error) {
                errors.push('Error validating category');
            }
        }
    }

    if (price !== undefined) {
        const numericPrice = parseFloat(price);
        if (isNaN(numericPrice) || numericPrice < 0) {
            errors.push('Price must be a positive number');
        }
    }

    if (quantity !== undefined) {
        const numericQuantity = parseInt(quantity);
        if (isNaN(numericQuantity) || numericQuantity < 0) {
            errors.push('Quantity must be a non-negative integer');
        }
    }

    if (quantity_alert !== undefined) {
        const numericQuantityAlert = parseInt(quantity_alert);
        if (isNaN(numericQuantityAlert) || numericQuantityAlert < 0) {
            errors.push('Minimum quantity must be a non-negative integer');
        }
    }

    if (brand !== undefined && brand.trim() === '') {
        errors.push('Brand cannot be empty');
    }

    if (description !== undefined && description.trim() === '') {
        errors.push('Description cannot be empty');
    }

    if (specifications !== undefined && specifications.trim() === '') {
        errors.push('Specifications cannot be empty');
    }

    if (source !== undefined && source.trim() === '') {
        errors.push('Source cannot be empty');
    }

    if (date_arrival !== undefined) {
        const arrivalDate = new Date(date_arrival);
        if (isNaN(arrivalDate.getTime())) {
            errors.push('Invalid arrival date format');
        }
    }

    if (is_rentable !== undefined && typeof is_rentable !== 'boolean' && is_rentable !== 'true' && is_rentable !== 'false' && is_rentable !== 1 && is_rentable !== 0) {
        errors.push('Is rentable must be a boolean value');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
}

module.exports = {
    validateProduct,
    validateProductUpdate
}