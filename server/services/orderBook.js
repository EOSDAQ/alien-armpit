const axios = require('axios');
const config = require('../config');

const { tiffanyApi } = config;
const baseUrl = `${tiffanyApi}/orderbook`;

const getSymbolData = async (symbol) => {
  try {
    const response = await axios.get(`${baseUrl}/${symbol}`);
    const { resultData } = response.data;
    return resultData;
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  getSymbolData,
};
