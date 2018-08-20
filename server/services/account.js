const axios = require('axios');
const config = require('../config');
const crypto = require('../modules/crypto');

const routePath = `${config.api}/acct`;

const encryptUser = (u) => {
  const user = u;
  if (user.email) {
    user.email = crypto.encrypt(user.email);
  }

  if (user.otpKey) {
    user.otpKey = crypto.encrypt(user.otpKey);
  }
  return user;
};

const decryptUser = (u) => {
  const user = u;
  if (user.email) {
    user.email = crypto.decrypt(user.email);
  }

  if (user.otpKey) {
    user.otpKey = crypto.decrypt(user.otpKey);
  }
  return user;
};

const getUserAuthInfo = async (accountName) => {
  const user = await getUserByAccountName(accountName);

  if (!user) {
    return {
      isUserCreated: false,
      isEmailConfirmed: false,
      isOtpConfirmed: false,
    };
  }

  return {
    isUserCreated: !!user.email,
    isEmailConfirmed: !!user.emailConfirm,
    isOtpConfirmed: !!user.otpConfirm,
  };
};

const getUserByAccountName = async (accountName) => {
  const url = `${routePath}/user/${accountName}`;
  let response;

  try {
    response = await axios.get(url);
  } catch (e) {
    response = e.response;
  }
  const { data } = response;
  if (!data) {
    return {};
  }
  if (response.status === 500 && data.resultCode === '1000') {
    return null;
  }

  const user = decryptUser(data.resultData);
  return {
    ...user,
  };
};

const createUser = async (user) => {
  const url = `${routePath}/user`;
  try {
    await axios.post(url, { ...(encryptUser(user)) });
  } catch (e) {
    throw new Error(e);
  }
};

const deleteUser = async (accountName) => {
  const url = `${routePath}/user/${accountName}`;
  try {
    const user = await axios.delete(url);
    return user;
  } catch (e) {
    throw new Error(e);
  }
};

const updateUser = async (user) => {
  const url = `${routePath}/user/${user.accountName}`;
  try {
    const result = await axios.put(url, { ...(encryptUser(user)) });
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getUserAuthInfo,
  getUserByAccountName,
  createUser,
  deleteUser,
  updateUser,
};
