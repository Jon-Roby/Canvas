const User = require('../models/user');
const Movie = require('../models/movie');

exports.get = (req, res, next) => {

  User.findById(req.body.id, (err, user) => {
    if (err) { return next(err); }
    res.json(user);
  });
};
