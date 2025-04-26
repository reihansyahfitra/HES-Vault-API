const express = require('express');
const router = express.Router();
const rentController = require('../controller/rentController');
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');

router.get('/', authenticate, isAdmin, rentController.getAllRents);

router.get('/my', authenticate, rentController.getRentsByUser);

router.get('/:id', authenticate, rentController.getRentById);

router.post('/', authenticate, rentController.createRent);

router.put('/:id/documentation-before', authenticate, rentController.updateRentDocumentationBefore);

router.put('/:id/documentation-after', authenticate, rentController.updateRentDocumentationAfter);

module.exports = router;