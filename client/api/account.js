import axios from 'axios';
import errorHandler from './errorHandler';

export const signin = async (data) => {
  try {
    const params = data;
    const response = await axios.post('/account/signin', { ...params });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export const check = async (accountName) => {
  try {
    const params = { accountName };
    const response = await axios.get('/account/check', { params });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};
