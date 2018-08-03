const express = require('express');
const config = require('../config');
const helper = require('../services/googleOtpHelper');
const accountService = require('../services/account');

const router = express.Router();
const { qrCode } = config.googleOtp;

// todo: generate secret and save on db
// const secret = 'JBSWY3DPEHPK3PXP';

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
  accountService.updateUserPartially({
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

    await accountService.updateUserPartially({ accountName, otpConfirmed: true });
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(200).send({ success: false });
    return;
  }
});

module.exports = router;
