const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

router.post('/register', studentController.registerStudent);

router.get('/all', studentController.getAllStudent);

router.put('/update', studentController.updateStudent);

router.delete('/delete/:id', studentController.deleteStudent);

router.post('/login', studentController.loginStudent);

module.exports = router;
