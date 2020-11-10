const Students = require("../models/students");

const create = (req, res) => {
    Students.create({
        name: req.body.name,
        age: req.body.age
    }).then(newStudents => {
        res.status(200).json(newStudents);
    }).catch(error => {
        res.status(400).send(error);
    })
}

const list = (res) => {
    Students.find(function (err, students) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(students);
    })
}

const getStudentsByName = (req,res) => {
    Students.find({name: req.params.name}, function (err, students) {
        if (err) {
            res.status(400).send(err);
        }
        resizeTo.status(200).json(students);
    })
}

const deleteStudentsByName = (req, res) => {
    Professor.deleteOne({name: req.params.name}, function (err, students) {
        if(err) {
            res.status(400).send(err);
        }
        res.status(200).json(students)
    })
}
exports.create = create;
exports.list = list;
exports.getStudentsByName = getStudentsByName;
exports.deleteStudentsByName = deleteStudentsByName;