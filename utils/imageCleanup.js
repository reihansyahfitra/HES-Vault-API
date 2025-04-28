const path = require('path');
const fs = require('fs').promises;
const fsSync = require('fs');

class ImageCleanupService {
    static async deleteImage(imagePath) {
        if (!imagePath) {
            console.log('No image path provided for deletion');
            return false;
        }

        try {
            // Validate image path to prevent directory traversal
            if (!imagePath.startsWith('/uploads/')) {
                console.log(`Invalid image path for deletion: ${imagePath}`);
                return false;
            }

            const fullPath = path.join(process.cwd(), 'public', imagePath);
            console.log(`Attempting to delete image: ${fullPath}`);

            // Check if file exists before attempting deletion
            if (!fsSync.existsSync(fullPath)) {
                console.log(`Image not found for deletion: ${fullPath}`);
                return false;
            }

            // Delete the main image
            await fs.unlink(fullPath);
            console.log(`✓ Successfully deleted image: ${imagePath}`);

            // Try to delete thumbnail if it exists
            const thumbnailDir = path.dirname(fullPath);
            const thumbnailFilename = `thumb_${path.basename(fullPath)}`;
            const thumbnailFullPath = path.join(thumbnailDir, thumbnailFilename);

            if (fsSync.existsSync(thumbnailFullPath)) {
                await fs.unlink(thumbnailFullPath);
                console.log(`✓ Successfully deleted thumbnail: ${thumbnailFilename}`);
            }

            return true;
        } catch (error) {
            console.error(`Error deleting image ${imagePath}:`, error);
            return false;
        }
    }

    static async deleteMultipleImages(imagePaths) {
        if (!Array.isArray(imagePaths) || imagePaths.length === 0) {
            return { deleted: [], failed: [] };
        }

        const results = {
            deleted: [],
            failed: []
        };

        for (const imagePath of imagePaths) {
            const success = await this.deleteImage(imagePath);
            if (success) {
                results.deleted.push(imagePath);
            } else {
                results.failed.push(imagePath);
            }
        }

        return results;
    }
}

module.exports = ImageCleanupService;