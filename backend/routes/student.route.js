const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Route to register a student
router.post('/register', studentController.registerStudent);

// Route to get all students
router.get('/all', studentController.getAllStudent);

// Route to update a student
router.put('/update', studentController.updateStudent);

// Route to delete a student by ID
router.delete('/delete/:id', studentController.deleteStudent);

module.exports = router;
