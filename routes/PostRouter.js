const express = require('express');

const router = express.Router();

const { PostValidator } = require('../validators');
const { PostController } = require('../controllers');

const baseUrl = '/users/:idUser/posts';

router.post(baseUrl, PostValidator.create, PostController.create);

router.get(baseUrl, PostValidator.getPosts, PostController.getPosts);

router.get(`${baseUrl}/:idPost`, PostValidator.getPost, PostController.getPost);

router.put(`${baseUrl}/:idPost`, PostValidator.update, PostController.updatePost);

module.exports = router;