const express = require ('express');
const router = express.Router();
let controller = require ('../controllers/users')

router.post('/complete', function (req, res) {
    controller.login(req, res);
})

module.exports = router; 