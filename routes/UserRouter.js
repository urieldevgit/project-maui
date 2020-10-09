const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');

const URL = '/users';

router.post(URL, UserValidator.create, UserController.create);
router.get(URL, UserController.getUsers);
router.get(`${URL}/:id`, UserController.getUser);
router.put(`${URL}/:id`, UserController.updateUser);
router.delete(`${URL}/:id`, UserController.deleteUser);

module.exports = router;
