const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
  getPosts: () => Post.find({ is_active: true }),
  getPost: (idPost) => Post.findById(idPost),
  update: (post, body) => {
    Object.assign(post, body);
    return post.save();
  },
};
