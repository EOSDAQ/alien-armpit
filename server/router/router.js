const express = require('express');
const router = express.Router();

const mailRoute = require('./mail');

router.use('/mail', mailRoute);

module.exports = router;