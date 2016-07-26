const express = require('express');
const movieRouter = express.Router();
const passport = require('passport');

const Authentication = require('../controllers/authentication');
const Movies = require('../controllers/movies');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

var User = require('../models/movie');


movieRouter.get('/', Movies.get);

movieRouter.post('/', Movies.create);

movieRouter.get('/:id', Movies.getOne);

movieRouter.get('/genres/:genre', Movies.getByGenre);

module.exports = movieRouter;
