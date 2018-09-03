import { tiffany } from './apis';

export const loadOrderBook = async ({ symbol }) =>
  tiffany.get(`/orderbook/${symbol.split('_')[0]}`);
