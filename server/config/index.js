/* pkg 실행 시 사용될 모듈을 명시하지 않으면 package에 포함이 되지 않으므로
  사용하지 않는 모듈도 로드 */
const env = process.env.ENV || 'devel';

const awsParamStore = require('aws-param-store');
const camelCase = require('camelcase');
const path = require('path');
const devel = require('./devel');
const stage = require('./stage');
const prod = require('./prod');
const commonConfig = require('./common');

let config = devel;

if (env === 'prod') {
  config = prod;
} else if (env === 'stage') {
  config = stage;
}

const paramPath = `/eosdaq/${env}`;
const params = awsParamStore.getParametersByPathSync(paramPath, {
  region: 'ap-northeast-2',
});

params.map((param) => {
  const type = camelCase(param.Name.replace(`${paramPath}/`, ''));
  if (type === 'tiffanyApi') {
    config[type] = `${param.Value}/api/v1/eosdaq`;
  } else if (type === 'burgundyApi') {
    config[type] = `${param.Value}/api/v1`;
  } else {
    config[type] = param.Value;
  }
});

config = Object.assign({}, commonConfig, config);
config.env = env;
config.rootPath = path.resolve(__dirname, '..', '..');

module.exports = config;
