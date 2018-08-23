import axios from 'axios';
import errorHandler from './errorHandler';

export const loadCoins = async () => {
  try {
    const response = await axios.get('/api/v1/ticker');
    const { tickers } = response.data;
    return tickers;
  } catch (err) {
    return errorHandler(err);
  }
};
