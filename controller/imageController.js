const { PrismaClient } = require('../generated/prisma');
const path = require('path');
const fs = require('fs').promises;
const fsSync = require('fs');
const ImageCleanupService = require('../utils/imageCleanup');

const prisma = new PrismaClient();

const addCacheHeaders = (res, maxAge = 86400) => {
    res.set({
        'Cache-Control': `public, max-age=${maxAge}`,
        'Expires': new Date(Date.now() + maxAge * 1000).toUTCString()
    });
};

const imageController = {
    async uploadProfilePicture(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No image file provided' });
            }

            const imagePath = `/uploads/profile/${req.file.filename}`;
            const thumbnailPath = req.file.thumbnail;

            const currentUser = await prisma.user.findUnique({
                where: { id: req.user.id },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    profile_picture: true
                }
            });

            if (currentUser.profile_picture) {
                await ImageCleanupService.deleteImage(currentUser.profile_picture);
            }

            const updatedUser = await prisma.user.update({
                where: { id: req.user.id },
                data: { profile_picture: imagePath }
            });

            addCacheHeaders(res);

            res.json({
                message: 'Profile picture updated successfully',
                profile_picture: imagePath,
                thumbnail: thumbnailPath,
                user: {
                    ...currentUser,
                    profile_picture: imagePath
                }
            });
        } catch (e) {
            console.error('Error uploading profile picture:', e);
            res.status(500).json({ message: 'Failed to upload profile picture', error: e.message });
        }
    },

    async uploadProductImage(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No image file provided' });
            }

            const { productId } = req.params;
            const imagePath = `/uploads/product/${req.file.filename}`;
            const thumbnailPath = req.file.thumbnail;

            const product = await prisma.product.findUnique({
                where: { id: productId },
                include: { user: true }
            });

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            if (product.user_id !== req.user.id && req.user.team_id !== 'administrator') {
                return res.status(403).json({ message: 'Not authorized to update this product' });
            }

            if (product.product_picture) {
                await ImageCleanupService.deleteImage(product.product_picture);
            }

            const updatedProduct = await prisma.product.update({
                where: { id: productId },
                data: { product_picture: imagePath }
            });

            addCacheHeaders(res);

            res.json({
                message: 'Product image updated successfully',
                product_picture: imagePath,
                thumbnail: thumbnailPath
            });
        } catch (e) {
            console.error('Error uploading product image:', e);
            res.status(500).json({ message: 'Failed to upload product image', error: e.message });
        }
    },

    async uploadRentDocumentation(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No image file provided' });
            }

            const { rentId, docType } = req.params;
            const imagePath = `/uploads/rent/${req.file.filename}`;
            const thumbnailPath = req.file.thumbnail;

            if (!['before', 'after', 'identification'].includes(docType)) {
                return res.status(400).json({ message: 'Invalid documentation type' });
            }

            if (rentId.startsWith('temp-') && docType === 'identification') {
                addCacheHeaders(res, 14400);
                return res.json({
                    message: `Temporary ${docType} documentation uploaded successfully`,
                    imagePath: imagePath,
                    thumbnail: req.file.thumbnail
                });
            }

            const rent = await prisma.rent.findUnique({
                where: { id: rentId },
                include: { user: true }
            });

            if (!rent) {
                return res.status(404).json({ message: 'Rent not found' });
            }

            if (rent.user_id !== req.user.id) {
                return res.status(403).json({ message: 'Not authorized to update this documentation' });
            }

            let previousImagePath = null;
            const updateData = {};

            switch (docType) {
                case 'before':
                    previousImagePath = rent.documentation_before;
                    updateData.documentation_before = imagePath;
                    break;
                case 'after':
                    previousImagePath = rent.documentation_after;
                    updateData.documentation_after = imagePath;
                    break;
                case 'identification':
                    previousImagePath = rent.identification_picture;
                    updateData.identification_picture = imagePath;
                    break;
            }

            if (previousImagePath) {
                await ImageCleanupService.deleteImage(previousImagePath);
            }

            const updatedRent = await prisma.rent.update({
                where: { id: rentId },
                data: updateData
            });

            addCacheHeaders(res, 14400);

            res.json({
                message: `${docType} documentation updated successfully`,
                imagePath: imagePath,
                thumbnail: req.file.thumbnail
            });
        } catch (e) {
            console.error('Error uploading documentation:', e);
            res.status(500).json({ message: 'Failed to upload documentation', error: e.message });
        }
    },

    async updateDocumentationPath(req, res) {
        try {
            const { oldPath, newRentId, docType } = req.body;

            if (!oldPath || !newRentId || !docType) {
                return res.status(400).json({ message: 'Missing required information' });
            }

            if (!['before', 'after', 'identification'].includes(docType)) {
                return res.status(400).json({ message: 'Invalid documentation type' });
            }

            // Check if the rent exists
            const rent = await prisma.rent.findUnique({
                where: { id: newRentId }
            });

            if (!rent) {
                return res.status(404).json({ message: 'Rent not found' });
            }

            // Check if the user is authorized to update this rent
            if (rent.user_id !== req.user.id && req.user.team_id !== 'administrator') {
                return res.status(403).json({ message: 'Not authorized to update this rent' });
            }

            // Update the rent with the correct path
            let previousImagePath = null;
            const updateData = {};
            switch (docType) {
                case 'identification':
                    previousImagePath = rent.identification_picture;
                    updateData.identification_picture = oldPath;
                    break;
                case 'before':
                    previousImagePath = rent.documentation_before;
                    updateData.documentation_before = oldPath;
                    break;
                case 'after':
                    previousImagePath = rent.documentation_after;
                    updateData.documentation_after = oldPath;
                    break;
            }

            if (previousImagePath && previousImagePath !== oldPath) {
                await ImageCleanupService.deleteImage(previousImagePath);
            }

            await prisma.rent.update({
                where: { id: newRentId },
                data: updateData
            });

            res.json({
                message: 'Documentation path updated successfully',
                rentId: newRentId,
                docType: docType,
                path: oldPath
            });
        } catch (e) {
            console.error('Error updating documentation path:', e);
            res.status(500).json({ message: 'Failed to update documentation path', error: e.message });
        }
    },

    async getImage(req, res) {
        try {
            const { type, filename } = req.params;
            const filePath = path.join(__dirname, '../public/uploads', type, filename);

            if (!fsSync.existsSync(filePath)) {
                return res.status(404).send('Image not found');
            }

            const stats = fsSync.statSync(filePath);
            const lastModified = stats.mtime.toUTCString();

            if (req.headers['if-modified-since'] === lastModified) {
                return res.status(304).end();
            }

            res.set({
                'Cache-Control': 'public, max-age=86400',
                'Last-Modified': lastModified
            });

            res.sendFile(filePath);
        } catch (e) {
            console.error('Error serving image:', e);
            res.status(500).send('Error serving image');
        }
    }
};

module.exports = imageController;