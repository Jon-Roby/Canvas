const User = require('../models/user');
const Movie = require('../models/movie');
const path = require('path');

exports.create = (req, res, next) => {
  console.log(1);
  const title = req.body.title;
  const description = req.body.description;
  const link = req.body.link;
  const username = req.body.username;
  const genre = req.body.genre;

  if (!title || !description || !link) {
    return res.status(422).send({ error: 'You must provide a title, description and link' });
  }

  Movie.findOne({ title: title }, (err, existingMovie) => {
    if (err) { return next(err); }

    if (existingMovie) {
      return res.status(422).send({ error: 'Movie title is in use' });
    }

    // Do check on genre
    const newMovie = new Movie({
      title: title,
      description: description,
      link: link,
      username: username,
      genre: genre
    });

    User.findOne({ username: username }, (err, user) => {
      if (err) { return next(err); }
      if (!user) {
        return res.status(422).send({ error: 'User not found' });
      }

      newMovie.save((err, movie) => {
        if (err) { return next(err); }

        user.movies.push(newMovie.title);

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
  console.log(2);
  var id = req.params.id;
  if (!id) {
    res.json({ error: 'No id specified' });
  }
  Movie.findById(id, (err, movie) => {
    if (err) { return next(err); }

    res.json(movie);
  });
};

exports.get = (req, res, next) => {
  console.log(3);
  Movie.find({}, (err, movies) => {
    if (err) { return next(err); }

    res.json(movies);
  });
};

exports.getByGenre = (req, res, next) => {
  console.log(4);
  var genre = req.params.genre;
  if (!genre) {
    res.json({ error: 'No genre specified' });
  }
  Movie.find({ genre: genre }, (err, movies) => {
    if (err) { return next(err); }

    res.json(movies);
  });
};

exports.search = (req, res, next) => {
  var query = req.params.query.split('+').join(' ');

  Movie.find({ title: query }, (err, movies) => {
    if (err) { return next(err); }

    res.send(movies);
  });
};
