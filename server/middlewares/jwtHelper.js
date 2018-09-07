const redis = require('../modules/redis');
const {
  JwtNotAuthorizedError,
  WrongUserHasTokenError,
} = require('../modules/errors');
const accountService = require('../services/account');
const jwt = require('../modules/jwt');
const {
  jwtAccessKey,
  jwtAccessTokenExpires,
  jwtRefreshKey,
} = require('../config');

const validate = async (req, res) => {
  const { cookies } = req;
  const { accessToken, refreshToken: refreshStoreKey } = jwt.getTokensFromCookie(cookies);

  if (!accessToken || !refreshStoreKey) {
    jwt.signout(res, cookies);
    throw JwtNotAuthorizedError;
  }

  const result = jwt.verify(accessToken, jwtAccessKey);
  if (result.success) {
    setPayload(req, accessToken);
    return;
  }

  if (!result.expired) {
    jwt.signout(res, cookies);
    throw JwtNotAuthorizedError;
  }

  const refreshToken = await redis.get(refreshStoreKey);
  const refreshResult = jwt.verify(refreshToken, jwtRefreshKey);
  if (!refreshResult.success) {
    jwt.signout(res, cookies);
    throw JwtNotAuthorizedError;
  }

  const { accountName } = refreshResult.token;
  await accountService.getUser(accountName);
  const newAccessToken = jwt.signToken({ accountName }, jwtAccessKey, jwtAccessTokenExpires);
  jwt.setTokenOnCookie(res, newAccessToken, refreshStoreKey);
  setPayload(newAccessToken);
};

const jwtValidate = async (req, res, next) => {
  try {
    await validate(req, res);
  } catch (e) {
    next(e);
  }
  next();
};

const isJwtValid = async (req, res) => {
  try {
    await validate(req, res);
    return true;
  } catch (e) {
    return false;
  }
};

const setPayload = (req, accessToken) => {
  req.locals.accessToken = accessToken;
  req.locals.tokenPayload = jwt.decode(accessToken, jwtAccessKey);
};

const validateAccount = (req, res, next) => {
  if (!req.locals.accessToken) {
    return;
  }
  const accountName = req.params.accountName
                      || req.body.accountName
                      || req.query.accountName;
  if (!accountName) {
    next();
  }
  const { tokenPayload } = req.locals;
  if (accountName !== tokenPayload.accountName) {
    next(WrongUserHasTokenError);
  }
  next();
};

module.exports = {
  jwtValidate,
  isJwtValid,
  validateAccount,
};
