const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true,
  },
  body: {
    type: String,
    require: true,
  },
  image: String,
  date: {
    type: Date,
    default: Date.now(),
  },
  permissions: {
    type: String,
    enum: ['PUBLIC', 'PRIVATE'],
    default: 'PUBLIC',
  },
  is_active: {
    type: Boolean,
    default: true,
  },
});

const Post = mongoose.model('Posts', postSchema);
module.exports = { Post, postSchema };
