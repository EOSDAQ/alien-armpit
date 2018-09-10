const express = require('express');
const HttpError = require('http-errors');
const service = require('../../services/orderBook');

const router = express.Router();

// 개인의 미체결내역
router.get('/symbol/:symbol/user/:accountName/orderBook', async (req, res, next) => {
  try {
    const { symbol } = req.params;
    const data = await service.getSymbolData(symbol);
    res.status(200).send({
      success: true,
      data,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
