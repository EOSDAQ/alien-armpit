const express = require('express');
const service = require('../../services/ticker');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const tickers = await service.getTickers();
    res.status(200).send({
      success: true,
      tickers,
    });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
