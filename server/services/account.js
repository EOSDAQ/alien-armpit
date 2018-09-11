const qs = require('querystring');
const config = require('../config');
const {
  HttpError,
  UnknownError,
} = require('../modules/errors');
const logger = require('../modules/logger');
const request = require('../modules/request');
const jwt = require('../modules/jwt');

const routePath = `${config.burgundyApi}/acct`;
const userBaseUrl = `${routePath}/user`;

const getUser = async (accountName, headerOptions) => {
  logger.debug('service/account getUser(): accountName=%s', accountName);
  jwt.checkAccessToken(headerOptions.accessToken);
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const { data } = await request('get', url, null, { ...headerOptions });
    return data;
  } catch (e) {
    throw HttpError.NotFound();
  }
};

const createUser = async (user, headerOptions) => {
  logger.debug('service/account createUser(): accountName=%s', user.accountName);
  const url = `${userBaseUrl}/${user.accountName}`;
  try {
    const { data } = await request('post', url, user, { ...headerOptions });
    return data;
  } catch (err) {
    const { response } = err;
    if (!response) {
      throw UnknownError;
    }
    const { status, data } = response;
    if (status === 500 && data.resultCode === '1000'
    && /* temp */ /Duplicate/.test(data.resultMsg)) {
      throw HttpError.Conflict('Account already exists');
    }
    throw UnknownError;
  }
};

const deleteUser = async (accountName, headerOptions) => {
  logger.debug('service/account deleteUser(): accountName=%s', accountName);
  jwt.checkAccessToken(headerOptions.accessToken);
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const { data } = await request('delete', url, null, { ...headerOptions });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const signin = async (accountName, headerOptions) => {
  logger.log('debug', 'service/account signin(): accountName=%s', accountName);
  const url = `${userBaseUrl}/${accountName}/signin`;
  try {
    const { data } = await request('post', url, { accountName }, { ...headerOptions });
    return data;
  } catch (e) {
    const { response } = e;
    if (!response) {
      throw HttpError.UnknownError();
    }
    if (response.status === 404 && response.data.resultCode === '1101') {
      throw HttpError.NotFound();
    }
    throw HttpError.UnknownError();
  }
};

const confirmEmail = async (accountName, email, emailHash, headerOptions) => {
  logger.debug('service/account confirmEmail(): accountName=%s', accountName);
  const url = `${userBaseUrl}/${accountName}/confirmEmail`;
  try {
    const { data } = await request('post', url, { email, emailHash }, { ...headerOptions });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const revokeEmail = async (accountName, emailHash, headerOptions) => {
  logger.debug('service/account revokeEmail(): accountName=%s', accountName);
  jwt.checkAccessToken(headerOptions.accessToken);
  const url = `${userBaseUrl}/${accountName}/revokeEmail`;

  try {
    const { data } = await request('delete', url, { emailHash }, { ...headerOptions });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const initOtp = async (accountName, headerOptions) => {
  logger.debug('service/account initOtp: accountName=%s', accountName);
  jwt.checkAccessToken(headerOptions.accessToken);
  const url = `${userBaseUrl}/${accountName}/newOTP`;
  try {
    const { data, status } = await request('post', url, null, { ...headerOptions });
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

const revokeOtp = async (accountName, headerOptions) => {
  logger.debug('service/account revokeOtp: accountName=%s', accountName);
  jwt.checkAccessToken(headerOptions.accessToken);
  const url = `${userBaseUrl}/${accountName}/revokeOTP`;
  try {
    const data = await request('delete', url, null, { ...headerOptions });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const validateOtp = async (accountName, code, headerOptions) => {
  logger.debug('service/account validateOtp: accountName=%s', accountName);
  jwt.checkAccessToken(headerOptions.accessToken);
  const url = `${userBaseUrl}/${accountName}/validateOTP`;

  try {
    const { data } = await request('post', url, qs.stringify({ code }), { ...headerOptions });
    return data;
  } catch (err) {
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
