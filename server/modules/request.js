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
    args.push({ data });
  } else {
    options.params = {data};
  }

  args.push(options);
  const response = await axios[method]( ...args );
  const { status, data: resultData } = response;
  return { status, data: resultData };
};

const setJwtHeader = (options) => {
  const { accessToken } = options;

  if (!accessToken) {
    return options;
  }

  options.headers['Authorization'] = `Bearer ${accessToken}`;
  // console.log('before ', options);
  delete options.accessToken;
  // console.log(options);
  return options;
};

module.exports = request;
