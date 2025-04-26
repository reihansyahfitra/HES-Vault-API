const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');
const { validateProduct, validateProductUpdate } = require('../middlewares/productValidation');

router.get('/', productController.getAllProducts);

router.get('/:id', productController.getProductById);

router.post('/',
    authenticate,
    isAdmin,
    validateProduct,
    productController.createProduct
);

router.put('/:id',
    authenticate,
    isAdmin,
    validateProductUpdate,
    productController.updateProduct
);

router.patch('/:id',
    authenticate,
    isAdmin,
    validateProductUpdate,
    productController.updateProduct
);

router.delete('/:id',
    authenticate,
    isAdmin,
    productController.deleteProduct
);

module.exports = router;