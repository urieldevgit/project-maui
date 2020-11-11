const mongoose = require('mongoose');
const { DB_URL } = require('../config');

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => (error ? console.error(error) : console.info('Mongo DB Connected')));

module.exports = mongoose;
