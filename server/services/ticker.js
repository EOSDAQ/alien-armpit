const axios = require('axios');
const config = require('../config');

const { tiffanyApi } = config;
const baseUrl = `${tiffanyApi}/ticker`;

const getTickers = async () => {
  try {
    const response = await axios.get(baseUrl);
    const tickers = response.data.resultData;
    return tickers.Tickers;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getTickers,
};
