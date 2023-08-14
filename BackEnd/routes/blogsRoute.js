const express = require('express');
const router = express.Router();
const blogsConroller = require('../controller/blogsConroller'); // Adjust the path

// Create a new image
router.post('/blogs', blogsConroller.createBlog);

// Get all images
router.get('/getblogs', blogsConroller.getAllBlogs);

// Get a specific image by ID
router.get('/blog/:id', blogsConroller.getBlogById);

// Update an image by ID
router.put('/blog/:id', blogsConroller.updateBlog);

// Delete an image by ID
router.delete('/blog/:id', blogsConroller.deleteBlog);

module.exports = router;
