const express = require('express');
const router = express.Router();
const orderController = require('../controller/orderController');
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');

router.get('/', authenticate, isAdmin, orderController.getAllOrders);

router.get('/my', authenticate, orderController.getOrdersByUsers);

router.get('/:id', authenticate, orderController.getOrderById);

router.put('/:id/status', authenticate, orderController.updateOrderStatus);

module.exports = router;