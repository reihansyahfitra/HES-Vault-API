const express = require('express');
const router = express.Router();
const categoryController = require('../controller/categoryController');
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');
const { validateCategory } = require('../middlewares/categoryValidation');

router.get('/', authenticate, categoryController.getAllCategories);

router.get('/:id', authenticate, categoryController.getCategoryById);

router.post('/', authenticate, isAdmin, validateCategory, categoryController.createCategory);

router.put('/:id', authenticate, isAdmin, validateCategory, categoryController.updateCategory);
router.patch('/:id', authenticate, isAdmin, validateCategory, categoryController.updateCategory);

router.delete('/:id', authenticate, isAdmin, categoryController.deleteCategory);

module.exports = router;