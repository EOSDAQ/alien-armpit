const redis = require('../modules/redis');
const {
  NotAuthorizedError,
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
  let refreshResult;
  let refreshToken;

  if (!accessToken || !refreshStoreKey) {
    throw new NotAuthorizedError();
  }

  const result = jwt.verify(accessToken, jwtAccessKey);
  if (result.success) {
    setPayload(req, accessToken);
    return;
  }

  if (!result.expired) {
    jwt.signout(res, cookies);
    throw new NotAuthorizedError();
  }

  refreshToken = await redis.get(refreshStoreKey);
  refreshResult = jwt.verify(refreshToken, jwtRefreshKey);
  if (!refreshResult.success) {
    redis.del(refreshStoreKey);
    throw new NotAuthorizedError();
  }

  const { accountName } = refreshResult.token;
  const user = await accountService.getUser(accountName);
  const newAccessToken = jwt.signToken(user, jwtAccessKey, jwtAccessTokenExpires);
  jwt.setTokenOnCookie(res, newAccessToken, refreshStoreKey);
  setPayload(newAccessToken);
}

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
    next(new WrongUserHasTokenError());
  }
  next();
};

module.exports = {
  jwtValidate,
  isJwtValid,
  validateAccount,
};
