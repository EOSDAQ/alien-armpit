const express = require('express');
const accountService = require('../../services/account');
const jwt = require('../../modules/jwt');
const jwtHelper = require('../../middlewares/jwtHelper');

const router = express.Router();
const { authenticate } = jwtHelper;

router.get('/login/:accountName', async (req, res, next) => {
  const {
    accountName,
  } = req.params;

  try {
    const user = await accountService.getUser(accountName);
    await jwt.login(res, user);
    res.status(200).send({ success: 'ok' });
  } catch (e) {
    next(e);
  }
});

router.get('/check', (req, res) => {
  res.status(200).send({ check: 'ok' });
});

router.get('/authenticate', authenticate, (req, res) => {
  res.status(200).send({ check: 'ok' });
});

router.get('/logout', (req, res) => {
  const { cookies } = req;
  jwt.logout(res, cookies);
  res.status(200).send({ logout: 'ok' });
});

module.exports = router;
