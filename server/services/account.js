const qs = require('querystring');
const config = require('../config');
const { HttpError } = require('../modules/errors');
const logger = require('../modules/logger');
const request = require('../modules/request');
const jwt = require('../modules/jwt');

const routePath = `${config.burgundyApi}/acct`;
const userBaseUrl = `${routePath}/user`;

const getUser = async (accountName, accessToken) => {
  logger.debug('service/account getUser(): accountName=%s', accountName);
  jwt.checkAccessToken(accessToken);
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const { data } = await request('get', url, null, { accessToken });
    return data;
  } catch(e) {
    throw HttpError.NotFound();
  }
};

const createUser = async (user) => {
  logger.debug('service/account createUser(): accountName=%s', user.accountName);
  const url = `${userBaseUrl}/${user.accountName}`;
  try {
    const { data } = await request('post', url, { ...user });
    return data;
  } catch(err) {
    throw HttpError.Conflict('Account already exists');
  }
};

const deleteUser = async (accountName, accessToken) => {
  logger.debug('service/account deleteUser(): accountName=%s', accountName);
  jwt.checkAccessToken(accessToken);
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const { data } = await request('delete', url, null, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const signin = async (accountName) => {
  logger.log('debug', 'service/account signin(): accountName=%s', accountName);
  const url = `${userBaseUrl}/${accountName}/signin`;
  try {
    const { data } = await request('post', url, { accountName });
    return data;
  } catch (e) {
    throw HttpError.NotFound();
  }
};

const confirmEmail = async (accountName, email, emailHash, accessToken) => {
  logger.debug('service/account confirmEmail(): accountName=%s', accountName);
  const url = `${userBaseUrl}/${accountName}/confirmEmail`;
  try {
    const { data } = await request('post', url, { email, emailHash }, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const revokeEmail = async (accountName, emailHash, accessToken) => {
  logger.debug('service/account revokeEmail(): accountName=%s', accountName);
  jwt.checkAccessToken(accessToken);
  const url = `${userBaseUrl}/${accountName}/revokeEmail`;

  try {
    const { data } = await request('delete', url, { emailHash }, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const initOtp = async (accountName, accessToken) => {
  logger.debug('service/account initOtp: accountName=%s', accountName);
  jwt.checkAccessToken(accessToken);
  const url = `${userBaseUrl}/${accountName}/newOTP`;
  try {
    const { data, status } = await request('post', url, null, { accessToken });
    return data;
  } catch (e) {
    const { response } = e;
    const { status, data } = response;
    if (status === 500 && data.resultCode === '1000') {
      return data;
    }
    throw new Error(e);
  }
};

const revokeOtp = async (accountName, accessToken) => {
  logger.debug('service/account revokeOtp: accountName=%s', accountName);
  jwt.checkAccessToken(accessToken);
  const url = `${userBaseUrl}/${accountName}/revokeOTP`;
  try {
    const data = await request('delete', url, null, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const validateOtp = async (accountName, code, accessToken) => {
  logger.debug('service/account validateOtp: accountName=%s', accountName);
  jwt.checkAccessToken(accessToken);
  const url = `${userBaseUrl}/${accountName}/validateOTP`;

  try {
    const { data } = await request('post', url, qs.stringify({ code }), { accessToken });
    return data;
  } catch(err) {
    throw HttpError.Unauthorized();
  }
};

module.exports = {
  // getUserAuthInfo,
  getUser,
  createUser,
  deleteUser,
  signin,
  confirmEmail,
  revokeEmail,
  initOtp,
  revokeOtp,
  validateOtp,
};
