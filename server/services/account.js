const axios = require('axios');
const qs = require('querystring');
const config = require('../config');
const request = require('../modules/request');

const routePath = `${config.burgundyApi}/acct`;
const userBaseUrl = `${routePath}/user`;

const getUser = async (accountName, accessToken) => {
  const url = `${userBaseUrl}/${accountName}`;

  try {
    const { data } = await request('get', url, null, { accessToken });
    return data.resultData;
  } catch (e) {
    const { response } = e;
    if (!response || response.status < 400) {
      throw new Error(e);  
    }
    // record not found
    if (response.data.resultCode === '0404') {
      return null;
    }
    throw new Error(e);
  }
};

const createUser = async (user, accessToken) => {
  const url = `${userBaseUrl}`;

  try {
    const response = await request('post', url, { ...user }, { accessToken });
    return response.data;
  } catch (e) {
    const { response } = e;
    if (!response || response.status < 400) {
      throw new Error(e);  
    }
    if (response.data.resultCode === '1000') {
      return false;
    }
  }
};

const deleteUser = async (accountName) => {
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const { data } = await request('delete', url, null, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const signin = async (accountName, accountHash) => {
  const url = `${userBaseUrl}/${accountName}/signin`;
  console.log('signed with::', url, { accountName, accountHash });
  try {
    const response = await axios.post(url, { accountName, accountHash });
    console.log('SIGNIN response >> ', response);
    return response.data;
  } catch (e) {
    console.log('SIGNIN error >> ', response);
    throw new Error(e);
  }
};

const confirmEmail = async (accountName, email, emailHash, accessToken) => {
  const url = `${userBaseUrl}/${accountName}/confirmEmail`;
  try {
    const { data } = await request('post', url, { email, emailHash }, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const revokeEmail = async (accountName, emailHash, accessToken) => {
  const url = `${userBaseUrl}/${accountName}/revokeEmail`;

  try {
    const { data } = await request('delete', url, { emailHash }, { accessToken });
    return data;
  } catch (e) {
    console.log(e.response.data);
    throw new Error(e);
  }
};

const initOtp = async (accountName, accessToken) => {
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
  const url = `${userBaseUrl}/${accountName}/revokeOTP`;
  try {
    const data = await request('delete', url, null, { accessToken });
    return data;
  } catch (e) {
    throw new Error(e);
  }
};

const validateOtp = async (accountName, code, accessToken) => {
  const url = `${userBaseUrl}/${accountName}/validateOTP`;
  
  try {
    const data = await request('post', url, qs.stringify({ code }), { accessToken });
    return data;
  } catch (e) {
    const { response } = e;
    const { status, data } = response;
    if (status === 400 && data.resultCode === '1101') {
      return null;
    }

    throw new Error(e);
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
