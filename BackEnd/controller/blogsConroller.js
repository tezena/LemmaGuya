const {blogsModel} = require ("../models/models.js")

exports.createBlog = async (req, res) => {
  try {
    const newBlog = new blogsModel(req.body);
    const savedBlog = await newBlog.save();
    res.json(savedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating Blog', error });
  }
};



// Get all blog posts
exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogsModel.find();

    const response = blogs.map((blog) => ({
      id: blog._id,
      imageUrl: blog.imageUrl,
      title: blog.title,
      author: blog.author,
      description: blog.description,
      datePosted: blog.datePosted,
    }));

    res.json(response);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error });
  }
};


exports.getBlogById = async (req, res) => {
  try {
    const blogId = req.params.id;
    const blog = await blogsModel.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: 'blog not found' });
    }
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching Blog', error });
  }
};

exports.updateBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const updatedBlog = await blogsModel.findByIdAndUpdate(blogId, req.body, { new: true });
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json(updatedBlog);
  } catch (error) {
    res.status(500).json({ message: 'Error updating Blog', error });
  }
};

exports.deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.id;
    const deleteBlog = await blogsModel.findByIdAndDelete(blogId);
    if (!deleteBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting Blog', error });
  }
};
