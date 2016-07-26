const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genreSchema = new Schema({
  comments: { type: Array },
  drama: { type: Array },
  comedy: { type: Array },
  thriller: { type: Array },
  horror: { type: Array },
  musical: { type: Array },
  bender: { type: Array },
});

const Genre = mongoose.model('genre', genreSchema);

module.exports = Genre;
