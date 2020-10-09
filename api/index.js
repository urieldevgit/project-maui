/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const { errors } = require('celebrate');
const morgan = require('morgan');
const { showDate } = require('../middlewares');

const app = express();

const { PORT } = process.env || 4000;

const router = require('../routes');

app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(showDate);

app.use('/v1/', router);
app.use(errors());

module.exports = { app, PORT };
