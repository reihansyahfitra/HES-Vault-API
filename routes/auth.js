const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const { validateRegister, validateLogin } = require('../middlewares/validationMiddleware');
const { authenticate } = require('../middlewares/authMiddleware');

router.post('/register', validateRegister, authController.register);

router.post('/login', validateLogin, authController.login);

router.post('/logout', authenticate, authController.logout);

module.exports = router;