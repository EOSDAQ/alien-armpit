const axios = require('axios');
const logger = require('./logger');

const request = async (meth, url, data, opt) => {
  const method = meth ? meth.toLowerCase() : 'get';
  const args = [url];
  let options = opt || {};
  options.headers = options.headers || {};
  options = setHeaderOptions(options);
  if (['post', 'put', 'patch'].indexOf(method) > -1) {
    args.push(data);
  } else if (method === 'delete') {
    options.data = data;
  } else {
    options.params = { data };
  }

  logger.debug(`${method.toUpperCase()} ${url} data=${data && JSON.stringify(data)} options=${options && JSON.stringify(options)}`);
  args.push(options);
  const response = await axios[method](...args);
  const { status, data: _data } = response;

  return {
    status,
    data: {
      success: true,
      trID: _data.trID,
      resultCode: status,
      resultMsg: _data.resultMsg,
      resultData: _data.resultData,
    },
  };
};

const setHeaderOptions = (opt) => {
  const options = opt;
  const { accessToken, reqId } = options;
  if (accessToken) {
    options.headers['Authorization'] = `Bearer ${accessToken}`;
    delete options.accessToken;
  }

  if (reqId) {
    options.headers['X-Request-ID'] = reqId;
    delete options.reqId;
  }

  return options;
};

module.exports = request;
