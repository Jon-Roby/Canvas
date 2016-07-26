const path = require('path');
const Genre = require('../models/genre');


exports.get = (req, res, next) => {
  var url = path.parse(req.route.path).base;

  Genre.find({}, (err, movies) => {
    if (err) { return next(err); }
    res.json(movies);
  });
};
