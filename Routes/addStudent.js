const express = require('express');
const router = express.Router();
const { addStudentsToCourse } = require('../Controllers/addStudentsToCourse');
const { auth } = require('../middleware/auth');

// POST /api/v1/students/add-to-course
router.post('/students/add', auth, addStudentsToCourse);

module.exports = router;