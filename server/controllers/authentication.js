const jwt = require('jwt-simple');

const User = require('../models/user');

if (!process.env.SECRET) {
  const config = require('../config');
}

const secret = process.env.SECRET || config.secret;

function tokenForUser(user) {
  const timestamp = new Date().getTime();

  return jwt.encode({ sub: user.id, iat: timestamp }, secret);
}

exports.signin = function(req, res, next) {
  const username = req.user.username;
  res.send({
    username: username,
    token: tokenForUser(req.user),
    userId: req.user._id
  });
}

exports.signup = function(req, res, next) {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username, password);
  if (!username || !password) {
    return res.status(422).send({ error: 'You must provide username and password' });
  }

  User.findOne({ username: username }, function(err, existingUser) {
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({
      username: username,
      password: password
    });

    user.save(function(err) {
      if (err) { return next(err); }

      res.json({
        token: tokenForUser(user),
        username: username,
        userId: user._id
      });
    });
  });
}
