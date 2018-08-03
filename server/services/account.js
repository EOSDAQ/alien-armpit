const axios = require('axios');
const config = require('../config');

const routePath = `${config.api}/acct`;

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
  if (response.status === 500 && data.resultCode === '1000') {
    return null;
  }

  // TODO che - 정상적인 데이터 받는 케이스 확인필요.
  return {
    ...data.resultData,
  };
};

const createUser = async (user) => {
  const url = `${routePath}/user`;
  try {
    await axios.post(url, { ...user });
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
    const result = await axios.put(url, { ...user });
    return result;
  } catch (e) {
    throw new Error(e);
  }
};

const updateUserPartially = async (param) => {
  const url = `${routePath}/user/${param.accountName}`;
  try {
    await axios.put(url, {
      ...param,
    });
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
  updateUserPartially,
};
