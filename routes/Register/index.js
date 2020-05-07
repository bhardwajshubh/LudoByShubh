const express = require('express');
const router = express.Router();
const userController = require('./../../controller/UserController');

router.route('/').get(userController.createRoom);

module.exports = router;