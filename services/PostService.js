/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
const { Post } = require('../models');

module.exports = {
  create: (body) => new Post(body),
  getPosts: () => Post.find({ is_active: true }),
  getPost: (idPost) => Post.findById(idPost),
  getByIdInUser: (idPost, user) => {
    const post = user.posts.id(idPost);
    if (post.is_active === false) return undefined;
    return post;
  },
  updateByIdInUser: (idPost, user, body) => {
    // El map() itera cada elemento del arreglo
    const updatedPosts = user.posts.map((post) => {
      if (post._id.toString() === idPost) {
        const updatedPost = Object.assign(post, body);
        return updatedPost; // Cada elemento que se regresa se agrega en updatedPost
      }
      return post;
    });
    user.posts = updatedPosts;
    return user.save();
  },
};
