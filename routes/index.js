const express = require('express');

const router = express.Router();

const UserRouter = require('./UserRouter');
const AuthRouter = require('./AuthRouter');

router.get('/', (req, res) => res.status(200).send('Happy API :D'));

router.use(AuthRouter);
router.use(UserRouter);

module.exports = router;
