/* eslint-disable no-console */
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

module.exports = {
  showDate: (req, res, next) => {
    const date = new Date();
    console.info(`Date of Request on Server: ${date.getFullYear()}`);
    next();
  },
  validateToken: (req, res, next) => {
    try {
      if (!req.headers.authorization) res.status(403).send({ error: 'Token is required' });
      const { authorization } = req.headers;
      const completeToken = authorization.split(' ');
      if (completeToken[0] !== 'Bearer') res.status(403).send({ error: 'Bearer suffix is required' });
      const token = completeToken[1];
      const decode = jwt.verify(token, JWT_SECRET);
      req.decode = decode;
      next();
    } catch (error) {
      res.status(401).send({ error });
    }
  },
};
