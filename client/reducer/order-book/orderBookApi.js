import axios from 'axios';
import { apiUrl } from 'constants/constants';

export const loadOrderBook = async ({ symbol }) => {
  const url = `${apiUrl.tiffany}/api/v1/eosdaq/orderbook/${symbol}`;
  const { data } = await axios.get(url);
  return data.resultData;
};
