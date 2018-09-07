import { tiffany } from './apis';

export const loadOrderBook = async ({ symbol }) =>
  tiffany.get(`/symbol/${symbol}/orderbook`);
