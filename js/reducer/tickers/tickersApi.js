import axios from 'axios';
import errorHandler from '../api/errorHandler';

export const loadCoins = async () => {
  try {
    const response = await axios.get('/mockup/coins.json');
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};
