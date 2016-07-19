const User = require('../models/user');
const Movie = require('../models/movie');

exports.get = (req, res, next) => {
  console.log(req.body);
  User.findById(req.body.id, (err, user) => {
    if (err) { return next(err); }
    console.log(user);
    res.json(user);
  });
};
