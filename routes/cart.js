const express = require('express');
const router = express.Router();
const cartController = require('../controller/cartController');
const { authenticate } = require('../middlewares/authMiddleware');
const { validateAddToCart, validateUpdateCartItem } = require('../middlewares/cartValidation');

router.get('/', authenticate, cartController.getCart);

router.post('/add', authenticate, validateAddToCart, cartController.addToCart);

router.put('/item/:itemId', authenticate, validateUpdateCartItem, cartController.updateCartItem);

router.delete('/item/:itemId', authenticate, cartController.removeCartItem);

router.delete('/clear', authenticate, cartController.clearCart);

module.exports = router;