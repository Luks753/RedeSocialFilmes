const mongoose = require('mongoose');

const options = { reconnectTries: Number.MAX_VALUE, reconnectInterval: 500, poolSize: 5, useNewUrlParser: true };

mongoose.connect('mongodb://localhost:27017/movies', options);
mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);


module.exports = mongoose;