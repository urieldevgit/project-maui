const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
//   getUsers: () => User.find({ is_active: true }),
//   getUser: (id) => User.findById(id),
//   update: (user, body) => {
//     Object.assign(user, body);
//     return user.save();
//   },
//   getUserByEmail: (email) => User.findOne({ email }),
};
