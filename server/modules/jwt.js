const jwt = require('jsonwebtoken');
const randToken = require('rand-token');
const redis = require('../modules/redis');
const config = require('../config');

const {
  jwtAccessKey,
  jwtAccessTokenExpires,
  jwtRefreshKey,
  jwtRefreshTokenExpires,
} = require('../config');

const getRefreshStoreKey = async () => {
  const refreshKey = randToken.uid(64);
  const keyInRedis = await redis.get(refreshKey);
  if (keyInRedis) {
    return keyInRedis;
  }
  
  return refreshKey;
};

const setTokenOnCookie = (res, accessToken, refreshStoreKey) => {
  if (!accessToken || !refreshStoreKey) {
    return;
  }
  const tokenStr = JSON.stringify({ accessToken, refreshToken: refreshStoreKey });
  const cookieOptions = {
    expires: 0,
    httpOnly: true,
    sameSite: 'Lax',
  };
  if (config.env !== 'devel') {
    cookieOptions.secure = true;
  }
  res.cookie('tokens', tokenStr, cookieOptions);
};

const signToken = (data, key, expires) => (
  jwt.sign(data, key, { expiresIn: expires })
);

const signin = async (res, user) => {
  const accessToken = signToken(user, jwtAccessKey, jwtAccessTokenExpires);
  const refreshStoreKey = await getRefreshStoreKey();
  const { accountName } = user;
  const refreshToken = signToken({ accountName }, jwtRefreshKey, jwtRefreshTokenExpires);
  redis.set(refreshStoreKey, refreshToken, 'EX', jwtRefreshTokenExpires);
  setTokenOnCookie(res, accessToken, refreshStoreKey);
  return { accessToken, refreshToken: refreshStoreKey };
};

const signout = (res, cookies) => {
  try {
    const { refreshToken: refreshKey } = getTokensFromCookie(cookies);
    if (refreshKey) {
      redis.del(refreshKey);
    }
  } catch(e) {
    console.error(e);
  }

  res.clearCookie('tokens');
};

const getTokensFromCookie = (cookies) => {
  const { tokens: tokensStr } = cookies;
  return tokensStr ? JSON.parse(tokensStr) : '';
};

const getAccessTokenFromCookie = (cookies) => {
  const tokens = getTokensFromCookie(cookies);
  if (!tokens) {
    return;
  }
  return tokens.accessToken || '';
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
  signToken,
  signin,
  signout,
  getTokensFromCookie,
  getAccessTokenFromCookie,
  verify,
  decode: jwt.decode,
};
