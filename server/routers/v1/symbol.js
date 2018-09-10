const express = require('express');
const HttpError = require('http-errors');

const {
  getUserOrderbook,
} = require('../../services/symbol');

const {
  jwtValidate,
  validateAccount,
} = require('../../middlewares/jwtHelper');

const router = express.Router();

// 토큰의 거래기록
router.get('/:symbol/tx', async (req, res) => {

});

// 개인의 토큰 미체결내역
router.get('/:symbol/user/:accountName/orderbook', jwtValidate, async (req, res) => {
  const { symbol, accountName } = req.params;
  const { accessToken } = req.locals;
  
  const data = await getUserOrderbook(accountName, symbol, accessToken);
  res.json(data);
});

module.exports = router;
