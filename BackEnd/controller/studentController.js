const {studentModel} = require('../models/models.js'); // Make sure to provide the correct path

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const newstudent = new studentModel(req.body);
    const savedstudent = await newstudent.save();

    res.status(201).json(savedstudent);
  } catch (error) {
    res.status(500).json({ message: "Error creating student", error });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
      const students = await studentModel.find();
      if (!students) {
        return res.status(404).json({ message: "students not found" });
      }

    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Error fetching students", error });
  }
};

// Get a specific student by ID
exports.getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await studentModel.findById(studentId);

    if (!student) {
      return res.status(404).json({ message: "student not found" });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Error fetching student", error });
  }
};

// Update an student by ID
exports.updateStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const updatedstudent = await studentModel.findByIdAndUpdate(studentId, req.body, {
      new: true, // Return the updated student
    });

    if (!updatedstudent) {
      return res.status(404).json({ message: "student not found" });
    }

    res.json(updatedstudent);
  } catch (error) {
    res.status(500).json({ message: "Error updating student", error });
  }
};

// Delete an student by ID
exports.deleteStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const deletedstudent = await studentModel.findByIdAndDelete(studentId);

    if (!deletedstudent) {
      return res.status(404).json({ message: "student not found" });
    }

    res.json({ message: "student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting student", error });
  }
};
