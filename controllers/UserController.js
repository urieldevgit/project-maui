/* eslint-disable no-underscore-dangle */
const { UserService } = require('../services');
const { comparePasswords } = require('../utils');
const Utils = require('../utils');

module.exports = {
  create: async (req, res) => {
    try {
      const { email } = req.body;
      const userExists = await UserService.getUserByEmail(email);
      if (userExists) res.status(400).send({ message: 'User already registered' });
      const user = await UserService.create(req.body);
      res.status(201).send({ user });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  getUsers: async (req, res) => {
    try {
      const users = await UserService.getUsers();
      res.status(201).send({ users });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  getUser: async (req, res) => {
    try {
      const user = await UserService.getUser(req.params.id);
      res.status(201).send({ user });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await UserService.getUser(req.params.id);
      if (!user) res.status(404).send({ message: 'User not found' });
      const updatedUser = await UserService.update(user, req.body);
      res.status(200).send({ updatedUser });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await UserService.getUser(req.params.id);
      if (!user) res.status(404).send({ message: 'User not found' });
      await UserService.update(user, { is_active: false });
      res.status(200).send({ message: 'User removed' });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  getUserByEmail: async (req, res) => {
    try {
      const user = await UserService.getUserByEmail(req.params.email);
      res.status(201).send({ user });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  signup: async (req, res) => {
    try {
      const { email } = req.body;
      const userExists = await UserService.getUserByEmail(email);
      if (userExists) res.status(400).send({ message: 'User already registered' });
      await UserService.create(req.body);
      res.status(201).send({ message: 'User registered succesfully' });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await UserService.getUserByEmail(email);
      if (!user) res.status(400).send({ message: 'Error on credentials' });
      const isValid = comparePasswords(password, user.password);
      if (!isValid) res.status(400).send({ message: 'Error on credentials' });
      // adding jwt
      const payload = {
        id: user._id,
        first_name: user.first_name,
        email: user.email,
      };
      const token = Utils.createToken(payload);
      if (!token) res.status(500).send({ message: 'Error creating user token' });
      res.status(200).send({ message: 'Login Success', token });
    } catch (error) {
      res.status(404).send({ error });
    }
  },
};
