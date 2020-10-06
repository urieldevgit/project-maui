const { User } = require('../models');

module.exports = {
  create: (body) => {
    const newUser = new User(body);
    return newUser.save();
  },
  getUsers: () => User.find({ is_active: true }),
  getUser: (id) => User.findById(id),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
};
