const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const SALT_FACTOR = 10;

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
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  is_active: {
    type: Boolean,
    default: true,
  },
}, { timestamps: true, versionKey: false });

// Agregar hasheo al password
// 'save' should match with moongose operativo,
// in this case 'save'
userSchema.pre('save', function (next) {
  const user = this;
  if (!user.isModified('password')) return next();

  return bcrypt.genSalt(SALT_FACTOR, (error, salt) => {
    if (error) return next(error);

    return bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) return next(err);
      user.password = hash;
      return next();
    });
  });
});

// el nombre de la colección mongo la convierte a plural
const User = mongoose.model('Users', userSchema);
module.exports = User;
