const express = require('express');
const { check, validationResult } = require('express-validator/check');
const cipher = require('../../services/cipher');
const service = require('../../services/account');
const mailService = require('../../services/mail');
const jwt = require('../../modules/jwt');
const jwtHelper = require('../../middlewares/jwtHelper');

const { jwtValidate } = jwtHelper;
const router = express.Router();

router.get('/user/:accountName', /* jwtValidate, */ [
  check('accountName').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.params;
    // const {
    //   accessToken,
    // } = req.locals;
    const user = await service.getUser(accountName/*, accessToken */);

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

router.get('/viewer', jwtValidate, async (req, res) => {
  const {
    accessToken,
    tokenPayload,
  } = req.locals;

  if (!accessToken) {
    res.status(401).send();
    return;
  }

  const { accountName } = tokenPayload;
  const viewer = await service.getUser(accountName);
  res.status(200).send({ viewer });
});

router.post('/signup', [
  check('accountName').exists(),
  check('accountHash').exists(),
  check('email').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
  } catch (e) {
    next(e);
  }

  const {
    accountName,
    accountHash,
    email,
  } = req.body;
  
  try {
    const emailHash = cipher.generateBase32str(20);    
    const data = await service.createUser({
      accountName,
      accountHash,
      email,
      emailHash,
    });
 
    mailService.sendVerifyEmail(accountName, email, emailHash);
    await jwt.signin(res, { accountName });
    res.status(200).json();
  } catch (e) {
    next(e);
  }


    // const user = await service.getUser(accountName);

    // let data;
    // if (user) {
    //   data = await service.revokeEmail(accountName, email, emailHash);
    // } else {
    //   data = await service.createUser({
    //     accountName,
    //     accountHash,
    //     email,
    //     emailHash,
    //   });
    // }

    // res.status(200).send(data);
});

router.post('/signin', [
  check('accountName').exists(),
  check('accountHash').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
      accountHash,
    } = req.body;

    // replace with service.signin
    const user = await service.getUser(accountName);
    if (!user) {
      res.status(401).send({ success: false });
      return;
    }
    await jwt.signin(res, {
      accountName,
    });
    res.status(200).send({ user });
  } catch (e) {
    next(e);
  }
});

router.post('/signout', (req, res) => {
  const { cookies } = req;
  jwt.signout(res, cookies);
  res.status(200).send({ success: true });
});

router.get('/user/validate', jwtValidate, (req, res) => {
  res.status(200).send({ success: true });
});

router.post('/user/resend-email', jwtValidate, [
  check('email').exists(),
  check('accountName').exists(),
], async (req, res) => {
  validationResult(req).throw();
  const {
    accountName,
    email,
  } = req.body;
  const {
    accessToken,
  } = req.locals;

  const emailHash = cipher.generateBase32str(20);
  const data = await service.revokeEmail(
    accountName,
    email,
    emailHash,
    accessToken,
  );
  mailService.sendVerifyEmail(req, accountName, email, emailHash);
  res.status(200).send(data);
}
);

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
    
    await service.confirmEmail(accountName, email, emailHash);
    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

router.post('/:accountName/otp/init/', jwtValidate, [
  check('accountName').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.params;
    const {
      accessToken,
    } = req.locals;
    let result;
    result = await service.initOtp(accountName, accessToken);
    if (result.resultCode === '1000') {
      await service.revokeOtp(accountName, accessToken);
      result = await service.initOtp(accountName, accessToken);
    }
    res.status(200).send(result);
  } catch (e) {
    next(e);
  }
});

router.post('/:accountName/otp/validate', jwtValidate, [
  check('code').exists(),
], async (req, res, next) => {
  try {
    validationResult(req).throw();
    const {
      accountName,
    } = req.params;
    const {
      accessToken,
    } = req.locals;

    const { code } = req.body;
    const result = await service.validateOtp(accountName, code, accessToken);
    if (!result) {
      res.status(401).send({ success: false });
      return;
    }

    res.status(200).send({ success: true });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
