import axios from 'axios';
import errorHandler from '../api/errorHandler';
import { staticPath } from 'common/constants/constants';

export const loadCoins = async () => {
  try {
    const response = await axios.get(`${staticPath.root}/mockup/coins.json`);
    return response.data;
  } catch (err) {
    return errorHandler(err);
  }
};
