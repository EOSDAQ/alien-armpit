const logger = require('../modules/logger');
const request = require('../modules/request');
const { HttpError } = require('../modules/errors');
const config = require('../config');

exports.getUserOrderbook = async (accountName, symbol, headerOptions) => {
  logger.debug('service/symbol getUserOrderbook()', { accountName, symbol });
  try {
    const { data } = await request(
      'get',
      `${config.tiffanyApi}/symbol/${symbol}/user/${accountName}/orderbook`,
      null,
      { ...headerOptions },
    );
    return data;
  } catch (e) {
    throw HttpError.NotFound();
  }
};

exports.getUserTx = async (accountName, symbol, headerOptions) => {
  logger.debug('service/symbol getUserTx()', { accountName, symbol });
  try {
    const { data } = await request(
      'get',
      `${config.tiffanyApi}/symbol/${symbol}/user/${accountName}/tx`,
      null,
      { ...headerOptions },
    );
    return data;
  } catch (e) {
    throw HttpError.NotFound();
  }
};
