const express = require('express');
const router = express.Router();
const studentController = require('../controller/studentController.js'); // Replace with the actual path

// Create a new student
router.post('/students', studentController.createStudent);

// Get all students
router.get('/students', studentController.getAllStudents);

// Get a specific student by ID
router.get('/students/:id', studentController.getStudentById);

// Update an student by ID
router.put('/students/:id', studentController.updateStudentById);

// Delete an student by ID
router.delete('/students/:id', studentController.deleteStudentById);

module.exports = router;
