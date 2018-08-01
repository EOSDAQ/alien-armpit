/* pkg 실행 시 사용될 모듈을 명시하지 않으면 package에 포함이 되지 않으므로
  사용하지 않는 모듈도 로드 */
const local = require('./local');
const development = require('./development');
const production = require('./production');

const env = process.env.NODE_ENV || 'local';
let config = local;

if (env === 'production') {
  config = production;
} else if (env === 'development') {
  config = development;
}

config.env = env;
module.exports = config;
