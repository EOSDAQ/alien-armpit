import axios from 'axios';

export const loadOrderBook = async () => {
  const resp = await axios.get('http://ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com:18890/api/v1/chart/orderbook');

  return resp.data;
};
