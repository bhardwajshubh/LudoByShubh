const router = require('express').Router();
const passport = require('passport');
require('./../../middleware/passport')(passport);
const gameController = require('./../../controller/gameController');

router.route('/game').get(passport.authenticate('jwt' , {session : false}) , gameController.gamePage);

module.exports = router;