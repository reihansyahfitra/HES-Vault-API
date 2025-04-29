const express = require('express');
const router = express.Router();
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');
const usersController = require('../controller/userController');

// Get all users (admin only)
router.get('/', authenticate, isAdmin, usersController.getAllUsers);

//  get users stats
router.get('/stats', authenticate, isAdmin, usersController.getUserStats);

// Get current user profile
router.get('/me', authenticate, usersController.getCurrentUser);

// Get specific user (user can get their own, admin can get any)
router.get('/:id', authenticate, usersController.getUserById);

// Update user (user can update their own, admin can update any including team)
router.put('/:id', authenticate, usersController.updateUser);

// Delete user (admin only)
router.delete('/:id', authenticate, isAdmin, usersController.deleteUser);

module.exports = router;