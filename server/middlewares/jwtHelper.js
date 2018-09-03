const redis = require('../modules/redis');
const {
  NotAuthorizedError,
} = require('../modules/errors');
const accountService = require('../services/account');
const jwt = require('../modules/jwt');
const {
  jwtAccessKey,
  jwtAccessTokenExpires,
  jwtRefreshKey,
} = require('../config');

const jwtValidate = async (req, res, next) => {
  const { cookies } = req;
  const { accessToken, refreshToken: refreshStoreKey } = jwt.getTokensFromCookie(cookies);
  let refreshResult;
  let refreshToken;

  try {
    if (!accessToken || !refreshStoreKey) {
      throw new NotAuthorizedError();
    }

    const result = jwt.verify(accessToken, jwtAccessKey);
    if (result.success) {
      setPayload(req, accessToken);
      next();
      return;
    }

    if (!result.expired) {
      jwt.signout(res, cookies);
      throw new NotAuthorizedError();
    }

    // temp
    jwt.signout(res, cookies);
    throw new NotAuthorizedError();

    // refreshToken = await redis.get(refreshStoreKey);
    // refreshResult = jwt.verify(refreshToken, jwtRefreshKey);
    // if (!refreshResult.success) {
    //   redis.del(refreshStoreKey);
    //   throw new NotAuthorizedError();
    // }

    // const { accountName } = refreshResult.token;
    // const user = await accountService.getUser(accountName);
    // const newAccessToken = jwt.getToken(user, jwtAccessKey, jwtAccessTokenExpires);
    // jwt.setTokenOnCookie(res, newAccessToken, refreshStoreKey);
    // setPayload(newAccessToken);
  } catch (e) {
    next(e);
  }
};

const setPayload = (req, accessToken) => {
  req.locals.accessToken = accessToken;
  req.locals.tokenPayload = jwt.decode(accessToken, jwtAccessKey);
};

module.exports = {
  jwtValidate,
};
