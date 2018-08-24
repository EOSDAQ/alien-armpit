import axios from 'axios';
import errorHandler from './errorHandler';

export const initOtp = async (accountName) => {
  try {
    const response = await axios.post(`/api/v1/account/${accountName}/otp/init`);
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export const validateOtp = async ({ accountName, code }) => {
  try {
    const response = await axios.post(`/api/v1/account/${accountName}/otp/validate`, { code });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};
