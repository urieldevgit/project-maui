const bcrypt = require('bcrypt');

module.exports = {
  comparePasswords: (reqPass, dbPass) => bcrypt.compareSync(reqPass, dbPass),
};
