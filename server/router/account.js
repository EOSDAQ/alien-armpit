const express = require('express');
const { check, validationResult } = require('express-validator/check');
const cipher = require('../services/cipher');
const service = require('../services/account');
const mailService = require('../services/mail');

const router = express.Router();

router.get('/check', [
  check('accountName').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.query;

    const authInfo = await service.getUserAuthInfo(accountName);
    res.status(200).send({
      success: true,
      ...authInfo,
    });
  } catch (e) {
    next(e);
  }
});

router.post('/signin', [
  check('accountName').exists(),
  check('email').exists(),
], async (req, res) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
      email,
    } = req.body;

    let user = await service.getUserByAccountName(accountName);
    if (!user) {
      user = {
        accountName,
        email,
      };

      await service.createUser(user);
    }

    const emailHash = cipher.generateBase32str(20);
    mailService.sendVerifyEmail(accountName, email, emailHash);
    user.email = email;
    user.emailHash = emailHash;
    await service.updateUser(user);
    res.status(200).send({ success: true });
  } catch (e) {
    res.status(e.status || 500).send({ success: false });
  }
});

// TODO che - 수정 필요 임시로 email 대신 accountName을 넣음
router.get('/verifyEmail/:accountName/:hash', async (req, res) => {
  const {
    accountName,
    hash,
  } = req.params;

  const user = await service.getUserByAccountName(accountName);
  if (hash !== user.emailHash) {
    return;
  }

  user.emailConfirm = true;
  await service.updateUser(user);
  // Backend will verify this key(tempHash) with tempUser and authorize user.
  // [SUCCESS] -> go to /register/success
  // [FAIL] -> go to /register/fail
  // res.redirect(`/register/success#${key}`);
  res.redirect('/');
});

module.exports = router;
