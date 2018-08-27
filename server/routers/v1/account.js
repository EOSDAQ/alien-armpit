const express = require('express');
const { check, validationResult } = require('express-validator/check');
const cipher = require('../../services/cipher');
const service = require('../../services/account');
const mailService = require('../../services/mail');

const router = express.Router();

router.get('/user/:accountName', [
  check('accountName').exists(),
], async (req, res, next) => {
  try {
    // validationResult(req).throw();
    console.log(req.params);
    const {
      accountName,
    } = req.params;
    const user = await service.getUser(accountName);

    res
      .status(user ? 200 : 404)
      .send({
        success: !!user,
        resultCode: user ? '0000' : '1000',
        user,
      });
  } catch (e) {
    next(e);
  }
});

router.post('/user', [
  check('accountName').exists(),
  check('email').exists(),
], async (req, res) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
      email,
    } = req.body;

    const user = await service.getUser(accountName);
    const emailHash = cipher.generateBase32str(20);

    let data;
    if (user) {
      data = await service.revokeEmail(accountName, email, emailHash);
    } else {
      data = await service.createUser({
        accountName,
        email,
        emailHash,
      });
    }

    mailService.sendVerifyEmail(accountName, email, emailHash);
    res.status(200).send(data);
  } catch (e) {
    res.status(e.status || 500).send({ success: false });
  }
});

router.post(
  '/user/resend-email',
  [
    check('email').exists(),
    check('accountName').exists(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    
    const {
      accountName,
      email,
    } = req.body;

    const user = await service.getUser(accountName);
    const emailHash = cipher.generateBase32str(20);
    const data = await service.revokeEmail(
      accountName,
      email,
      emailHash,
    );

    mailService.sendVerifyEmail(accountName, email, emailHash);
    res.status(200).send(data);
  },
)

router.get('/verifyEmail/:accountName/:email/:emailHash', [
  check('accountName').exists(),
  check('email').exists(),
  check('emailHash').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
      email,
      emailHash,
    } = req.params;

    // Backend will verify this key(tempHash) with tempUser and authorize user.
    // [SUCCESS] -> go to /register/success
    // [FAIL] -> go to /register/fail
    // res.redirect(`/register/success#${key}`);
    const result = await service.confirmEmail(accountName, email, emailHash);    
    if (!result.emailConfirm) {
    }
  } catch (e) {
    next(e);
  }
  res.redirect('/');
});

router.post('/:accountName/otp/init/', [
  check('accountName').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.params;
    let result;
    result = await service.initOtp(accountName);
    if (result.resultCode === '1000') {
      await service.revokeOtp(accountName);
      result = await service.initOtp(accountName);
    }

    res.status(200).send(result);
  } catch (e) {
    console.log(e);
    next(e);
  }
});

router.post('/:accountName/otp/validate', [
  check('code').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.params;

    const { code } = req.body;

    const result = await service.validateOtp(accountName, code);
    if (!result || !result.otpConfirm) {
      res.status(401).send({ success: false });
      return;
    }

    res.status(200).send({ success: true });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
