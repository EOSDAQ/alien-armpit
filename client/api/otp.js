import axios from 'axios';
import errorHandler from './errorHandler';
import { proxy } from './apis';

export const initOtp = async ({ accountName }) => {
  try {
    const response = await axios.post(
      `/api/v1/account/${accountName}/otp/init`,
      { accountName },
    );
    
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export const validateOtp = async ({ accountName, code }) =>
  proxy.post(`/account/${accountName}/otp/validate`, { code });
