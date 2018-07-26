const env = process.env.NODE_ENV || 'local';
const configPath = `./${env}`;
const config = require(configPath);
config.env = env;
module.exports = config;
