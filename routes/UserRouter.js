const express = require('express');

const router = express.Router();
const { UserController } = require('../controllers');

const URL = '/users';

router.post(URL, UserController.create);
router.get(URL, UserController.getUsers);
router.get(`${URL}/:id`, UserController.getUser);
router.put(`${URL}/:id`, UserController.updateUser);
router.delete(`${URL}/:id`, UserController.deleteUser);

module.exports = router;
