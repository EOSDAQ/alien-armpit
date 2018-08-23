import axios from 'axios';

export const loadOrderBook = async ({ symbol }) => {
  const url = `/api/v1/orderbook/${symbol.split('_')[0]}`;
  const { data } = await axios.get(url);
  return data;
};
