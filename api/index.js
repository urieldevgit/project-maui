const express = require('express');

const app = express();

const { PORT } = process.env || 4000;

const router = require('../routes');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/v1/', router);

module.exports = { app, PORT };
