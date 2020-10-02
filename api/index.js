const express = require('express');

const app = express();

const { PORT } = process.env;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Project API UP :)'));

module.exports = { app, PORT };
