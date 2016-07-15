const passport = require('passport');

const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

var express = require('express');
var authRouter = express.Router();

authRouter.get('/', requireAuth, function(req, res) {
  res.send({ message: 'Test message' });
});

authRouter.get('/hello', function(req, res) {
  res.send({ message: 'Made it here' });
});

authRouter.post('/signin', requireSignin, Authentication.signin);

authRouter.post('/signup', Authentication.signup);

module.exports = authRouter;
