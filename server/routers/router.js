const express = require('express');
const account = require('./v1/account');
const ticker = require('./v1/ticker');
const symbol = require('./v1/symbol');

const router = express.Router();
router.use('/v1/account', account);
router.use('/v1/ticker', ticker);
router.use('/v1/symbol', symbol);

module.exports = router;
