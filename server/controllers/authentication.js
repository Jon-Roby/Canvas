var request = require('request');

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

exports.youtubeAuth = function(req, res, next) {

  var options = {
    url: "https://accounts.google.com/o/oauth2/token",
    method: "POST",
    form: {
      code: '4/X5FAfFloIfHLTNDziRdBKC_v4xvNBp3cSj6f_q1WrZo#',
      client_id: '119796969943-0pab7jeg1a1nnv23a9c4k1n4f58kuuf9.apps.googleusercontent.com',
      client_secret: 'NS_6GCf7giJhwsAnh4tKFDe0',
      redirect_uri: 'http://localhost:8080/oauth2callback',
      grant_type: 'authorization_code'
    }
  }

  request(options, function(err, response, body) {
    if (err) return err;

    var youtubeData = JSON.parse(body);
    console.log("youtubeData ", youtubeData);
    // User.findOne({
    //   instagramId: instagramData.user.id
    // }, function(err, user) {
    //   if (err) return err;
    //
    //   if (!user) {
    //     var user = new User({
    //       instagramId: instagramData.user.id,
    //       username: instagramData.user.username,
    //       fullName: instagramData.user.full_name,
    //       profilePicture: instagramData.user.profile_picture,
    //       accessToken: instagramData.access_token
    //     });
    //
    //     user.save(function(err) {
    //       if (err) console.log(err);
    //       return err;
    //     });
    //   }
    // });

  });
}
