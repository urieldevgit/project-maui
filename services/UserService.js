const { User } = require('../models');

module.exports = {
  create: (body) => {
    const newUser = new User(body);
    return newUser.save();
  },
  getUsers: () => User.find({ is_active: true }),
  getUser: (id) => User.findById({ is_active: true, _id: id }),
  update: (user, body) => {
    Object.assign(user, body);
    return user.save();
  },
  getUserByEmail: (email) => User.findOne({ is_active: true, email }),
  addPost: (user, post) => {
    user.posts.push(post);
    return user.save();
  },
  addPosts: (user, posts) => {
    // eslint-disable-next-line no-param-reassign
    user.posts = posts;
    return user.save();
  },
};
