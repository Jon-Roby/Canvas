const express = require('express');
const genreRouter = express.Router();
const passport = require('passport');
const Genres = require('../controllers/genres');

// genreRouter.get('/genres/drama', Genres.get);

genreRouter.get('/drama', Genres.get);
genreRouter.get('/comedy', Genres.get);
genreRouter.get('/thriller', Genres.get);
genreRouter.get('/horror', Genres.get);
genreRouter.get('/musical', Genres.get);
genreRouter.get('/bender', Genres.get);

module.exports = genreRouter;
