const mongoose = require('mongoose');

const marksSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student' },
  course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  testType: String, // CT1, Assignment, Mid-term, etc.
  date: Date,
  marksPerCO: [
    {
      co: { type: mongoose.Schema.Types.ObjectId, ref: 'CourseOutcome' },
      obtainedMarks: Number
    }
  ]
});

module.exports = mongoose.model('Marks', marksSchema); 