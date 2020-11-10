const mongoose = require('mongoose');

const studentsSchema = new mongoose.Schema({
    name: String,
    age: Number
});

const students = mongoose.model('students', studentsSchema);

module.exports = students; 