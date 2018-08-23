const express = require('express');
const service = require('../../services/orderBook');

const router = express.Router();

router.get('/:symbol', async (req, res, next) => {
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
