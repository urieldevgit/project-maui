const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = {
  comparePasswords: (reqPass, dbPass) => bcrypt.compareSync(reqPass, dbPass),
  createToken: (payload) => jwt.sign(payload, JWT_SECRET, { expiresIn: '30d' }),
};
