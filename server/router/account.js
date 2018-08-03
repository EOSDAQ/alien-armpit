const express = require('express');
const cipher = require('../services/cipher');
const service = require('../services/account');
const mailService = require('../services/mail');

const router = express.Router();

router.get('/check', async (req, res) => {
  const {
    accountName,
  } = req.query;

  const authInfo = await service.getUserAuthInfo(accountName);
  res.status(200).send({
    success: true,
    ...authInfo,
  });
});

router.post('/signin', async (req, res) => {
  const {
    accountName,
    email,
  } = req.body;

  try {
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
    console.log(e);
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
