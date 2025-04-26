const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

const imageController = {
    async uploadProfilePicture(req, res) {
        try {
            if (!req.file) {
                return res.status(400).json({ message: 'No image file provided' });
            }

            const imagePath = req.file.path;

            const updatedUser = await prisma.user.update({
                where: { id: req.user.id },
                data: { profile_picture: imagePath }
            });

            res.json({
                message: 'Profile picture updated successfully',
                profile_picture: imagePath
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
            const imagePath = req.file.path;

            const product = await prisma.product.findUnique({
                where: { id: productId },
                include: { user: true }
            });

            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }

            if (product.user_id !== req.user.id && req.user.teamId !== 'administrator') {
                return res.status(403).json({ message: 'Not authorized to update this product' });
            }

            const updatedProduct = await prisma.product.update({
                where: { id: productId },
                data: { product_picture: imagePath }
            });

            res.json({
                message: 'Product image updated successfully',
                product_picture: imagePath
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
            const imagePath = req.file.path;

            if (!['before', 'after', 'identification'].includes(docType)) {
                return res.status(400).json({ message: 'Invalid documentation type' });
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

            const updateData = {};
            switch (docType) {
                case 'before':
                    updateData.documentation_before = imagePath;
                    break;
                case 'after':
                    updateData.documentation_after = imagePath;
                    break;
                case 'identification':
                    updateData.identification_picture = imagePath;
                    break;
            }

            const updatedRent = await prisma.rent.update({
                where: { id: rentId },
                data: updateData
            });

            res.json({
                message: `${docType} documentation updated successfully`,
                [docType === 'before' ? 'documentation_before' :
                    docType === 'after' ? 'documentation_after' : 'identification_picture']: imagePath
            });
        } catch (e) {
            console.error('Error uploading documentation:', e);
            res.status(500).json({ message: 'Failed to upload documentation', error: e.message });
        }
    }
};

module.exports = imageController;