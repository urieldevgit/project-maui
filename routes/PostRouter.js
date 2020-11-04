const express = require('express');

const router = express.Router();

const { PostValidator } = require('../validators');
const { PostController } = require('../controllers');

const baseUrl = '/users/:idUser/posts';

router.post(baseUrl, PostValidator.create, PostController.create);

module.exports = router;
