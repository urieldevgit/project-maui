const express = require('express');

const router = express.Router();

const { UserValidator } = require('../validators');
const { UserController } = require('../controllers');
const { validateToken } = require('../middlewares');

const URL = '/users';

router.use(validateToken);
router.post(URL, UserValidator.create, UserController.create);
router.get(URL, UserController.getUsers);
router.get(`${URL}/:id`, UserValidator.getUser, UserController.getUser);
router.put(`${URL}/:id`, UserValidator.updateUser, UserController.updateUser);
router.delete(`${URL}/:id`, UserValidator.deleteUser, UserController.deleteUser);

module.exports = router;
