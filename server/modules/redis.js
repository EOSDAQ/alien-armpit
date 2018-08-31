// const redis = require('redis');
// const { promisify } = require('util');
// const config = require('../config');

// const client = redis.createClient(config.redisPort, config.redisHost);
// const exporting = {};
// const funcNames = [
//   'get',
//   'set',
//   'exists',
//   'del',
// ];

// funcNames.forEach((name) => {
//   if (!name || !client[name]) {
//     return;
//   }
//   exporting[name] = promisify(client[name]).bind(client);
// });

// module.exports = exporting;
let keys = {};

const redis = {
  get: async key => keys[key],
  exists: async key => !!keys[key],
  del: async key => delete keys[key],
}

module.exports = redis;
