const Teacher = require("../models/teachers");

const create = (req, res) => {
    Teacher.create({
        name: req.body.name,
        age: req.body.age
    }).then(newTeacher => {
        res.status(200).json(newTeacher);
    }).catch(error => {
        res.status(400).send(error);
    })
}

const list = (res) => {
    Teacher.find(function (err, teachers) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(teachers);
    })
}

const updateTeacherByName = (req, res) => {
    Teacher.updateOne({name: req.params.name}, {age: req.body.age}, function (err, teachers) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(teachers);
    })
}

const getTeacherByName = (req,res) => {
    Teacher.find({name: req.params.name}, function (err, teachers) {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(teachers);
    })
}

const deleteTeacherByName = (req, res) => {
    Teacher.deleteOne({name: req.params.name}, function (err, teachers) {
        if(err) {
            res.status(400).send(err);
        }
        res.status(200).json(teachers)
    })
}

exports.create = create;
exports.list = list;
exports.getTeacherByName = getTeacherByName;
exports.deleteTeacherByName = deleteTeacherByName;
exports.updateTeacherByName = updateTeacherByName;