const express = require('express')
const router = express.Router();
var teachersController = require('../Controllers/teachers')
const { validationResult, body, param } = require('express-validator')

router.get('/', function(req, res){
    teachersController.list(res);
})

router.get('/:name', [
    param('name').notEmpty().escape(),
], function (req, res) {
    const errors = validationResult(req);
    if(errors.isEmpty()) {
        teachersController.getTeachersByName(req,res);
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
        teachersController.create(req, res);
    } else {
        res.status(404).json({errors: errors.array()})
    }
})

router.put('/:name', function(req,res) {
    teachersController.updateTeachersByName(req,res);
    }
)

router.delete('/:name', function(req,res) {
    teachersController.deleteTeachersByName(req,res);
    }
)


module.exports = router; 