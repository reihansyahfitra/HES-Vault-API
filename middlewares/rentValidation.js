const validateRentCreate = (req, res, next) => {
    const {
        identification,
        phone,
        cart_id,
        start_date,
        end_date,
        identification_picture
    } = req.body;

    const errors = [];

    if (!identification || identification.trim() === '') {
        errors.push('Identification number is required');
    }

    if (!phone || phone.trim() === '') {
        errors.push('Phone number is required');
    }

    if (!cart_id) {
        errors.push('Cart ID is required');
    }

    if (!start_date) {
        errors.push('Start date is required');
    } else {
        const startDate = new Date(start_date);
        if (isNaN(startDate.getTime())) {
            errors.push('Invalid start date format');
        }
    }

    if (!end_date) {
        errors.push('End date is required');
    } else {
        const endDate = new Date(end_date);
        if (isNaN(endDate.getTime())) {
            errors.push('Invalid end date format');
        }
    }

    if (!identification_picture || identification_picture.trim() === '') {
        errors.push('Identification picture is required');
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

const validateOrderStatusUpdate = (req, res, next) => {
    const { order_status, payment_status } = req.body;
    const errors = [];

    if (!order_status && !payment_status) {
        errors.push('Either order status or payment status must be provided');
    }

    if (order_status) {
        const validOrderStatuses = [
            'APPROVED',
            'ONRENT',
            'OVERDUE',
            'WAITING',
            'REJECTED',
            'CANCELLED',
            'RETURNED'
        ];

        if (!validOrderStatuses.includes(order_status)) {
            errors.push(`Invalid order status. Must be one of: ${validOrderStatuses.join(', ')}`);
        }
    }

    if (payment_status) {
        const validPaymentStatuses = ['UNPAID', 'PAID'];
        if (!validPaymentStatuses.includes(payment_status)) {
            errors.push(`Invalid payment status. Must be one of: ${validPaymentStatuses.join(', ')}`);
        }
    }

    if (errors.length > 0) {
        return res.status(400).json({ errors });
    }

    next();
};

module.exports = {
    validateRentCreate,
    validateOrderStatusUpdate
};