const {researchModel} = require ("../models/models.js")

exports.createResearch = async (req, res) => {
  try {
    const newResearch = new researchModel(req.body);
    const savedResearch = await newResearch.save();
    res.status(201).json(savedResearch); 
  } catch (error) {
    res.status(500).json({ message: 'Error creating research', error });
  }
};

exports.getAllResearches = async (req, res) => {
  try {
    const images = await researchModel.find();
    res.json(images);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching images', error });
  }
};

exports.getResearchById = async (req, res) => {
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

exports.updateResearch = async (req, res) => {
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

exports.deleteResearch = async (req, res) => {
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
