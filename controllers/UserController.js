const { UserService } = require('../services');

module.exports = {
  create: async (req, res) => {
    try {
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
      const updatedUser = await UserService.update(user, req.body);
      res.status(200).send({ updatedUser });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
  deleteUser: async (req, res) => {
    try {
      const user = await UserService.getUser(req.params.id);
      await UserService.update(user, { is_active: false });
      res.status(200).send({ message: 'User removed' });
    } catch (error) {
      res.status(409).send({ error });
    }
  },
};
