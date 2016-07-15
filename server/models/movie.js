const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const movieSchema = new Schema({
  title: { type: String, unique: true, lowercase: true },
  description: { type: String, lowercase: true },
  link: { type: String },
  username: String
});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
