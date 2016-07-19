const User = require('../models/user');
const Movie = require('../models/movie');

exports.create = (req, res, next) => {
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;
  const username = req.body.username;

  if (!title || !description || !link) {
    return res.status(422).send({ error: 'You must provide a title, description and link' });
  }

  Movie.findOne({ title: title }, (err, existingMovie) => {
    if (err) { return next(err); }

    if (existingMovie) {
      return res.status(422).send({ error: 'Movie title is in use' });
    }

    const newMovie = new Movie({
      title: title,
      description: description,
      link: link,
      username: username
    });

    newMovie.save((err, movie) => {
      if (err) { return next(err); }

      console.log("username ", username);

      User.findOne({ username: username }, (err, user) => {
        if (err) { return next(err); }

        console.log("user ", user);
        user.movies.push(movie.title);

        user.save(err => {
          if (err) { return next(err); }

          res.json({
            movie: movie
          });
        });
      });

    });

  });
}

exports.getOne = (req, res, next) => {
  var id = req.params.id;
  Movie.findById(id, (err, movie) => {
    if (err) { return next(err); }

    res.json(movie);
  });
};

exports.get = (req, res, next) => {
  Movie.find({}, (err, movies) => {
    if (err) { return next(err); }

    res.json(movies);
  });
};
