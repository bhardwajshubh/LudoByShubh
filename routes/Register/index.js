const express = require('express');
const router = express.Router();
const userController = require('./../../controller/UserController');

router.route('/').get(userController.createRoom);
router.route('/joinroom').get(userController.joinRoom);

module.exports = router;