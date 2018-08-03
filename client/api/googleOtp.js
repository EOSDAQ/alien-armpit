import axios from 'axios';
import errorHandler from './errorHandler';

export const getInitialData = async (accountName) => {
  try {
    const params = { accountName };
    const response = await axios.post('/gotp/getInitialData', params);
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};

export const authenticate = async (payload) => {
  try {
    const response = await axios.post('/gotp/authenticate', { ...payload });
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};
