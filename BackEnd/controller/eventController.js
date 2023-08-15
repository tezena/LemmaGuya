const {eventsModel} = require ("../models/models.js")

// Create a new gallery image
exports.createEvent = async (req, res) => {
  try {
    const newImage = new eventsModel(req.body);
    const savedImage = await newImage.save();
    res.json(savedImage);
  } catch (error) {
    res.status(500).json({ message: 'Error creating image', error });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const events = await eventsModel.find();

    // Structure the response to match the example image response
    const response = events.map((event) => ({
      id: event._id,
      imageUrl: event.imageUrl,
      title: event.title,
      location: event.location,
      date: event.date,
      description: event.description,
      datePosted: event.datePosted,
    }));

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};


// Get a specific gallery image by ID
exports.getEventById = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await eventsModel.findById(imageId);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching image', error });
  }
};

// Update a gallery image by ID
exports.updateEvent = async (req, res) => {
  try {
    const imageId = req.params.id;
    const updatedImage = await eventsModel.findByIdAndUpdate(imageId, req.body, { new: true });
    if (!updatedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(updatedImage);
  } catch (error) {
    res.status(500).json({ message: 'Error updating image', error });
  }
};

// Delete a gallery image by ID
exports.deleteEvent = async (req, res) => {
  try {
    const imageId = req.params.id;
    const deletedImage = await eventsModel.findByIdAndDelete(imageId);
    if (!deletedImage) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json({ message: 'Image deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting image', error });
  }
};
