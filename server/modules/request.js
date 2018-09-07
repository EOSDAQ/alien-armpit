const axios = require('axios');

const request = async (meth, url, data, opt) => {
  const method = meth ? meth.toLowerCase() : 'get';
  const args = [ url ];
  let options = opt || {};
  options.headers = options.headers || {};
  options = setJwtHeader(options);

  if ([ 'post', 'put', 'patch' ].indexOf(method) > -1) {
    args.push(data);
  } else if (method === 'delete') {
    options.data = data;
  } else {
    options.params = {data};
  }

  args.push(options);
  const response = await axios[method]( ...args );
  const { status, data: _data } = response;

  return {
    status,
    data: {
      success: true,
      trID: _data.trID,
      resultCode: status,
      resultMsg: _data.resultMsg,
      resultData: _data.resultData,
    }
  };
};

const setJwtHeader = (options) => {
  const { accessToken } = options;
  if (!accessToken) {
    return options;
  }
  options.headers['Authorization'] = `Bearer ${accessToken}`;
  delete options.accessToken;
  return options;
};

module.exports = request;
