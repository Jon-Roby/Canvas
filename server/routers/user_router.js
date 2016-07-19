const express = require('express');
const userRouter = express.Router();
const passport = require('passport');

const Authentication = require('../controllers/authentication');
const Movies = require('../controllers/movies');
const passportService = require('../services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

const User = require('../models/user');

userRouter.get('/:id', Movies.getOne);

module.exports = userRouter;
