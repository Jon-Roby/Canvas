const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, function(req, res) {
    res.send({ message: 'Test message' });
  });

  app.get('/hello', function(req, res) {
    res.send({ message: 'Made it here' });
  });

  app.post('/api/users/signin', requireSignin, Authentication.signin);

  app.post('/api/users/signup', Authentication.signup);
}
