const mongoose = require('mongoose');

const URL = process.env.DB_URL;

mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true }, (error) => (error ? console.error(error) : console.info('Mongo DB Connected')));

module.exports = mongoose;
