const mongoose = require('../config/database');

const Movie = mongoose.model('Movie', new mongoose.Schema(), 'movie');

module.exports = Movie;
