const jwt = require('jsonwebtoken');
const randToken = require('rand-token');
const redis = require('../modules/redis');
const {
  jwtAccessKey,
  jwtAccessTokenExpires,
  jwtRefreshKey,
  jwtRefreshTokenExpires,
} = require('../config');

const getRefreshStoreKey = async () => {
  const refreshKey = randToken.uid(64);
  const isExist = await redis.exists(refreshKey);
  if (isExist) {
    return getRefreshStoreKey();
  }
  return refreshKey;
};

const setTokenOnCookie = (res, accessToken, refreshStoreKey) => {
  if (!accessToken || !refreshStoreKey) {
    return;
  }
  const tokenStr = JSON.stringify({ accessToken, refreshToken: refreshStoreKey });
  res.cookie('tokens', tokenStr, {
    expires: 0,
    httpOnly: true,
    sameSite: 'Lax',
    // secure: true,  // this is for https
  });
};

const getToken = (data, key, expires) => (
  jwt.sign(data, key, { expiresIn: expires })
);

const login = async (res, user) => {
  const accessToken = getToken(user, jwtAccessKey, jwtAccessTokenExpires);
  const { accountName } = user;
  const refreshStoreKey = await getRefreshStoreKey();
  const refreshToken = getToken({ accountName }, jwtRefreshKey, jwtRefreshTokenExpires);
  redis.set(refreshStoreKey, refreshToken, 'EX', jwtRefreshTokenExpires);
  setTokenOnCookie(res, accessToken, refreshStoreKey);
};

const logout = (res, cookies) => {
  res.cookie('tokens', '');
  const { refreshToken: refreshKey } = getTokensFromCookie(cookies);
  if (refreshKey) {
    redis.del(refreshKey);
  }
};

const getTokensFromCookie = (cookies) => {
  const { tokens: tokensStr } = cookies;
  return tokensStr ? JSON.parse(tokensStr) : '';
};

const verify = (token, key) => {
  const result = {};

  try {
    result.token = jwt.verify(token, key);
    result.success = true;
  } catch (e) {
    result.success = false;
    if (e.name === 'TokenExpiredError') {
      result.expired = true;
    }
  }

  return result;
};

module.exports = {
  setTokenOnCookie,
  getToken,
  login,
  logout,
  getTokensFromCookie,
  verify,
};
