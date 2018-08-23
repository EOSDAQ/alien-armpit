const express = require('express');
const account = require('./v1/account');
const otp = require('./v1/otp');
const ticker = require('./v1/ticker');
const orderBook = require('./v1/orderBook');

const router = express.Router();
router.use('/v1/account', account);
router.use('/v1/otp', otp);
router.use('/v1/ticker', ticker);
router.use('/v1/orderBook', orderBook);

module.exports = router;
