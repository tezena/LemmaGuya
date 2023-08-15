const express = require('express');
const router = express.Router();
const artistController = require('../controller/artistController.js'); // Replace with the actual path

// Create a new artist
router.post('/artists', artistController.createArtist);

// Get all artists
router.get('/artists', artistController.getAllArtists);

// Get a specific artist by ID
router.get('/artists/:id', artistController.getArtistById);

// Update an artist by ID
router.put('/artists/:id', artistController.updateArtistById);

// Delete an artist by ID
router.delete('/artists/:id', artistController.deleteArtistById);

module.exports = router;
