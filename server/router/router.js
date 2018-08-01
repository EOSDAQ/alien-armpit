const express = require('express');
const router = express.Router();

const authRoute = require('./auth/auth');

router.use('/auth', authRoute);

module.exports = router;