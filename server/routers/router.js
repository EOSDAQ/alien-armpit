const express = require('express');
const account = require('./v1/account');
const ticker = require('./v1/ticker');
const orderBook = require('./v1/orderBook');
const auth = require('./v1/auth');

const router = express.Router();
router.use('/v1/account', account);
router.use('/v1/ticker', ticker);
router.use('/v1/orderBook', orderBook);
router.use('/v1/auth', auth);

module.exports = router;
