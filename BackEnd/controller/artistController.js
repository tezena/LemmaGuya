const {artistModel} = require('../models/models.js'); // Make sure to provide the correct path

// Create a new artist
exports.createArtist = async (req, res) => {
  try {
    const newArtist = new artistModel(req.body);
    const savedArtist = await newArtist.save();

    res.status(201).json(savedArtist);
  } catch (error) {
    res.status(500).json({ message: "Error creating artist", error });
  }
};

// Get all artists
exports.getAllArtists = async (req, res) => {
  try {
    const artists = await artistModel.find();

    res.json(artists);
  } catch (error) {
    res.status(500).json({ message: "Error fetching artists", error });
  }
};

// Get a specific artist by ID
exports.getArtistById = async (req, res) => {
  try {
    const artistId = req.params.id;
    const artist = await artistModel.findById(artistId);

    if (!artist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(artist);
  } catch (error) {
    res.status(500).json({ message: "Error fetching artist", error });
  }
};

// Update an artist by ID
exports.updateArtistById = async (req, res) => {
  try {
    const artistId = req.params.id;
    const updatedArtist = await artistModel.findByIdAndUpdate(artistId, req.body, {
      new: true, // Return the updated artist
    });

    if (!updatedArtist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json(updatedArtist);
  } catch (error) {
    res.status(500).json({ message: "Error updating artist", error });
  }
};

// Delete an artist by ID
exports.deleteArtistById = async (req, res) => {
  try {
    const artistId = req.params.id;
    const deletedArtist = await artistModel.findByIdAndDelete(artistId);

    if (!deletedArtist) {
      return res.status(404).json({ message: "Artist not found" });
    }

    res.json({ message: "Artist deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting artist", error });
  }
};
