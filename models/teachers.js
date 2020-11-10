const mongoose = require ('mongoose');

const teachersSchema = new mongoose.Schema({
    name: String,
    age: Number,
})

const teacher = mongoose.model('teacher', teachersSchema)
module.exports = teacher;