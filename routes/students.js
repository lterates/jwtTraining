const express = require ('express');
const router = express.Router();
const {validationResult, body, param} = require ('express-validator');
let studentsController = require ('../controllers/students');

router.get('/', function(req, res) {
    studentsController.list(res);
})

router.get('/:name', [
    param('name').notEmpty().escape(),
], function(req, res) {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        students_controller.getStudentsByName(req,res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.post('/', [
    body('name').notEmpty().escape(),
    body('age').isNumeric()
], function (req,res) {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        studentsController.create(req, res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.delete('/:name', function(req,res) {
    studentsController.deleteStudentByName(req,res);
    }
)

module.exports = router; 