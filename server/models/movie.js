const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');


// To handle
// credits
// date
// likes
// views
// comments
// genre
const movieSchema = new Schema({
  title: { type: String, unique: true, lowercase: true },
  description: { type: String, lowercase: true },
  link: { type: String },
  credits: { type: Array },
  genre: { type: Array },

  username: { type: String },

  likes: { type: Array },
  views: { type: Number, default: 0 },

  comments: { type: Array }

});

const Movie = mongoose.model('movie', movieSchema);

module.exports = Movie;
