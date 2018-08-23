const express = require('express');
const { check, validationResult } = require('express-validator/check');
const config = require('../../config');
const helper = require('../../services/otpHelper');
const accountService = require('../../services/account');

const router = express.Router();
const { qrCode } = config.googleOtp;

router.get('/check/auth', [
  check('accountName').exists(),
], (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.query;

    const secretKey = accountService.getSecretKey(accountName);
    res.status(200).send({
      success: true,
      hasSecretKey: !!secretKey,
    });
  } catch (e) {
    next(e);
  }
});

router.post('/getInitialData', [
  check('accountName').exists(),
], (req, res, next) => {
  try {
    validationResult(req).throw();
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
  } catch (e) {
    next(e);
  }
});

router.post('/authenticate', [
  check('accountName').exists(),
  check('password').exists(),
], async (req, res) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
      password,
    } = req.body;
    const user = await accountService.getUserByAccountName(accountName);
    const otp = helper.getOtp(user.otpKey);

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
  }
});

module.exports = router;
