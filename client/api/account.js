import axios from 'axios';
import errorHandler from './errorHandler';

const userBaseUrl = '/api/v1/account/user';

export const signUp = async (params) => {
  try {
    const response = await axios.post(userBaseUrl, params);
    return response.data.resultData;
  } catch (err) {
    return errorHandler(err);
  }
};

export const get = async (accountName) => {
  try {
    const response = await axios.get(`${userBaseUrl}/${accountName}`);
    const { user } = response.data;
    return user;
  } catch (err) {
    const { response } = err;
    const { status, data } = response;

    if (status === 500 && data.resultCode === '1000') {
      return null;
    }

    return errorHandler(err);
  }
};
