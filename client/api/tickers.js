import axios from 'axios';
import errorHandler from './errorHandler';
import { apiUrl } from 'constants/constants';

export const loadCoins = async () => {
  try {
    const response = await axios.get(`${apiUrl.tiffany}/api/v1/eosdaq/ticker`);
    const { data: { resultData: { Tickers }}} = response;
    return Tickers;
  } catch (err) {
    return errorHandler(err);
  }
};
