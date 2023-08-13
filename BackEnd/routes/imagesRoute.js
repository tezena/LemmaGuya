const express = require('express');
const router = express.Router();
const imagesController = require('../controller/imagesController'); // Adjust the path

// Create a new image
router.post('/images', imagesController.createImage);

// Get all images
router.get('/getimages', imagesController.getAllImages);

// Get a specific image by ID
router.get('/images/:id', imagesController.getImageById);

// Update an image by ID
router.put('/images/:id', imagesController.updateImage);

// Delete an image by ID
router.delete('/images/:id', imagesController.deleteImage);

module.exports = router;
