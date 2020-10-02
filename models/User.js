const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
    trim: true,
  },
  last_name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {

  },
}, { timestamps: true, versionKey: false });

// el nombre de la colección mongo la convierte a plural
const User = mongoose.model('Users', userSchema);
module.exports = User;
