const express = require('express');
const config = require('../config');
const helper = require('../services/otpHelper');
const accountService = require('../services/account');

const router = express.Router();
const { qrCode } = config.googleOtp;

router.get('/check/auth', (req, res) => {
  const {
    accountName,
  } = req.query;

  const secretKey = accountService.getSecretKey(accountName);
  res.status(200).send({
    success: true,
    hasSecretKey: !!secretKey,
  });
});

router.post('/getInitialData', (req, res) => {
  const {
    accountName,
  } = req.body;
  const otpKey = helper.generateSecretKey();
  accountService.updateUser({
    accountName,
    otpKey,
  });

  const qrCodeUrlParam = qrCode.param.replace('{{accountName}}', accountName);
  res.status(200).send({
    qrCodeUrl: `${qrCode.url}?${qrCodeUrlParam}${otpKey}`,
    otpKey,
  });
});

router.post('/authenticate', async (req, res) => {
  const {
    accountName,
    password,
  } = req.body;
  let user;
  let otp;

  try {
    user = await accountService.getUserByAccountName(accountName);
    otp = helper.getOtp(user.otpKey);

    if (password !== otp) {
      throw new Error();
    }

    if (!user.otpConfirm) {
      await accountService.updateUser({
        accountName,
        otpConfirm: true,
      });
    }

    res.status(200).send({ success: true });
  } catch (e) {
    res.status(200).send({ success: false });
    return;
  }
});

module.exports = router;
