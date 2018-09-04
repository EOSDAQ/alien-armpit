const express = require('express');
const Boom = require('boom');
const ecc = require('../../modules/ecc');
const { check, validationResult } = require('express-validator/check');
const cipher = require('../../services/cipher');
const service = require('../../services/account');
const mailService = require('../../services/mail');
const jwt = require('../../modules/jwt');
const jwtHelper = require('../../middlewares/jwtHelper');
const { NotAuthorizedError } = require('../../modules/errors');

const {
  jwtValidate,
  validateAccount,
} = jwtHelper;
const router = express.Router();

router.post('/signup', [
  check('accountName').exists(),
  check('accountHash').exists(),
  check('accountPublicKey').exists(),
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
    accountPublicKey,
    email,
  } = req.body;
  
  const tokens = jwt.getTokensFromCookie(req.cookies);

  if (tokens) {
    return next(Boom.notAcceptable('Cannot register whilst signed-in'));
  }

  const verified = ecc.verify(
    accountHash,
    accountName,
    accountPublicKey,
  );

  if (!verified) {
    return next(new NotAuthorizedError())
  }

  const emailHash = cipher.generateBase32str(20);

  try {
    await service.createUser({
      accountName,
      accountHash,
      email,
      emailHash,
    });
  } catch (e) {
    const { response: { resultMsg }} = e;
    return next(Boom.conflict(resultMsg));
  }

  // successfully created user
  try {
    const { accessToken } = await jwt.signin(res, { accountName });
    mailService.sendVerifyEmail(req, accountName, email, emailHash);
    const viewer = await service.getUser(accountName, accessToken);
    res.status(201).json({ viewer });
  } catch (e) {
    jwt.signout(res, req.cookies);
    next(e)
  }
});

router.post('/signin', [
  check('accountName').exists(),
  check('signature').exists(),
  check('publicKey').exists(),
], async (req, res, next) => {
  validationResult(req).throw();
  // publickKey is scatter publicKey

  const {
    accountName,
    signature,
    publicKey,
  } = req.body;

  let user;
  try {
    user = await service.getUser(accountName);
  } catch(err) {
    return next(Boom.notFound());
  }

  const isValid = ecc.verify(
    signature,
    req.hostname,
    publicKey,
  );

  if (!isValid) {
    return next(Boom.unauthorized());
  }

  try {
    await jwt.signin(res, { accountName });
    res.send({ user });
  } catch(e) {
    next(e.response)
  }
});

router.post('/signout', (req, res) => {
  const { cookies } = req;
  jwt.signout(res, cookies);
  res.status(200).send({ success: true });
});

router.get('/validate', jwtValidate, (req, res) => {
  res.status(200).send({ success: true });
});

router.post('/user/resend-email', jwtValidate, validateAccount, [
  check('email').exists(),
  check('accountName').exists(),
], async (req, res, next) => {
  try {
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
      emailHash,
      accessToken,
    );
    mailService.sendVerifyEmail(req, accountName, email, emailHash);
    res.status(200).send(data);
  } catch (e) {
    next(e);
  }
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

    // TODO 수정 필요 - 현재는 강제 signout 후 새 token 발급
    jwt.signout(res, req.cookies);
    const newTokens = await jwt.signin(res, { accountName });
    const { accessToken } = newTokens; 
    result = await service.confirmEmail(accountName, email, emailHash, accessToken);

    if (!result.resultData.emailConfirm) {
      jwt.signout(res, req.cookies);
      res.status(401).send('failed to confirm email');
      return;
    }

    res.redirect('/');
  } catch (e) {
    next(e);
  }
});

router.post('/:accountName/otp/init/', jwtValidate, validateAccount, [
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

router.post('/:accountName/otp/validate', jwtValidate, validateAccount, [
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

router.get('/user/:accountName', jwtValidate, validateAccount, [
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
    const user = await service.getUser(accountName, accessToken);

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
  try {
    const {
      accessToken,
      tokenPayload,
    } = req.locals;

    if (!accessToken) {
      res.status(401).send({});
      return;
    }

    const { accountName } = tokenPayload;
    const viewer = await service.getUser(accountName, accessToken);
    res.status(200).send({ viewer });
  } catch(e) {
    next(e);
  }
});

// TODO method => delete로 변경, 로그인 유저와 삭제 대상 유저의 일치 여부 확인 필요
router.get('/user/:accountName/delete', jwtValidate, async (req, res) => {
  try {
    const {
      accountName,
    } = req.params;
    const {
      accessToken,
    } = req.locals;

    const result = await service.deleteUser(accountName, accessToken);
    res.status(200).send({ success: true });
  } catch(e) {
    next(e);
  }
});

module.exports = router;
