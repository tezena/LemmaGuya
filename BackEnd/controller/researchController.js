const {researchModel} = require ("../models/models.js")

// Create a new gallery image
exports.createImage = async (req, res) => {
  try {
    const newImage = new researchModel(req.body);
    const savedImage = await newImage.save();
    res.json(savedImage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating image', error });
  }
};

// Get all gallery images
exports.getAllImages = async (req, res) => {
  try {
    const images = await researchModel.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images', error });
  }
};

// Get a specific gallery image by ID
exports.getImageById = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await researchModel.findById(imageId);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image', error });
  }
};

// Update a gallery image by ID
exports.updateImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const updatedImage = await researchModel.findByIdAndUpdate(imageId, req.body, { new: true });
    if (!updatedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: 'Error updating image', error });
  }
};

// Delete a gallery image by ID
exports.deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const deletedImage = await researchModel.findByIdAndDelete(imageId);
    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error });
  }
};
