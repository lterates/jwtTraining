const express = require ('express');
const router = express.Router();
let controller = require ('../controllers/users')

router.post('/login', function (req, res) {
    controller.login(req, res);
})

module.exports = router; 