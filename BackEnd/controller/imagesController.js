const { imagesModel } = require("../models/models.js");

exports.createImage = async (req, res) => {
    try {
    const newImage = new imagesModel(req.body);
    const savedImage = await newImage.save();
    // Fetch the full image data from the database, projecting all fields
    const fullImage = await imagesModel.findById(savedImage._id).select("-__v");

    res.json(fullImage);
  } catch (error) {
    res.status(500).json({ message: "Error creating image", error });
  }
};

exports.getAllImages = async (req, res) => {
  try {
    const images = await imagesModel.find();
    if (!images || images.length === 0) {
      return res.status(404).json({ message: "No images found" });
    }

    const response = images.map((image) => ({
      id: image._id,
      imageUrl: image.imageUrl,
      title: image.title,
      description: image.description,
      artist_name: image.artist_name,
      type: image.type,
    }));

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: "Error fetching images", error });
  }
};


exports.getImageById = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await imagesModel.findById(imageId);
    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: "Error fetching image", error });
  }
};

exports.updateImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const updatedImage = await imagesModel.findByIdAndUpdate(
      imageId,
      req.body,
      { new: true }
    );
    if (!updatedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: "Error updating image", error });
  }
};

exports.deleteImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const deletedImage = await imagesModel.findByIdAndDelete(imageId);
    if (!deletedImage) {
      return res.status(404).json({ message: "Image not found" });
    }
    res.json({ message: "Image deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting image", error });
  }
};
