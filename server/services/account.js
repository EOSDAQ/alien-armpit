const axios = require('axios');
const config = require('../config');

const routePath = `${config.burgundyApi}/acct`;
const userBaseUrl = `${routePath}/user`;

const getUser = async (accountName) => {
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const response = await axios.get(url);
    return response.data.resultData;
  } catch (e) {
    const { response } = e;
    const {
      status,
      data,
    } = response;

    // record not found
    if (status === 500 && data.resultCode === '1000') {
      return null;
    }

    throw new Error(e);
  }
};

const createUser = async (user) => {
  const url = `${userBaseUrl}`;
  try {
    const response = await axios.post(url, { ...user });
    // TODO
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUser = async (accountName) => {
  const url = `${userBaseUrl}/${accountName}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

const confirmEmail = async (accountName, email, emailHash) => {
  const url = `${userBaseUrl}/${accountName}/confirmEmail`;
  try {
    const response = await axios.post(url, { email, emailHash });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

const revokeEmail = async (accountName, email, emailHash) => {
  const url = `${userBaseUrl}/${accountName}/revokeEmail`;  
  try {
    const response = await axios.delete(url, {
      data: { email, emailHash },
    });
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

const initOtp = async (accountName) => {
  const url = `${userBaseUrl}/${accountName}/newOTP`;
  try {
    const response = await axios.post(url);
    return response.data;
  } catch (e) {
    const { response } = e;
    const { status, data } = response;
    if (status === 500 && data.resultCode === '1000') {
      return data;
    }
    throw new Error(e);
  }
};

const revokeOtp = async (accountName) => {
  const url = `${userBaseUrl}/${accountName}/revokeOTP`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (e) {
    throw new Error(e);
  }
};

const validateOtp = async (accountName, code) => {
  const url = `${userBaseUrl}/${accountName}/validateOTP`;
  try {
    const response = await axios.post(url, { code });
    return response.data;
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
  confirmEmail,
  revokeEmail,
  initOtp,
  revokeOtp,
  validateOtp,
};
