const express = require('express');
const router = express.Router();
const rateLimit = require('express-rate-limit');
const { authenticate } = require('../middlewares/authMiddleware');
const { isAdmin } = require('../middlewares/adminAuthMiddleware');
const { upload, optimizeImage } = require('../middlewares/storageMiddleware');
const imageController = require('../controller/imageController');

const uploadLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
    message: { message: 'Too many uploads from this IP, please try again after 15 minutes' }
});

const viewLimiter = rateLimit({
    windowMs: 5 * 60 * 1000,
    max: 200,
    message: { message: 'Too many image requests from this IP, please try again after 5 minutes' }
});

router.post('/profile',
    uploadLimiter,
    authenticate,
    upload.single('image'),
    imageController.uploadProfilePicture
);

router.post('/product/:productId',
    uploadLimiter,
    authenticate,
    isAdmin,
    upload.single('image'),
    imageController.uploadProductImage
);

router.post('/rent/:rentId/:docType',
    uploadLimiter,
    authenticate,
    upload.single('image'),
    imageController.uploadRentDocumentation
);

router.get('/:type/:filename',
    viewLimiter,
    imageController.getImage
);

module.exports = router;