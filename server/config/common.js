const camelCase = require('camelcase');

const envConfig = {};
const envKeys = Object.keys(process.env || {});

envKeys.forEach((key) => {
  if (!process.env[key]) {
    return;
  }
  envConfig[camelCase(key)] = process.env[key];
});

const commonConfig = {
  mail: {
    service: 'Gmail',
    auth: {
      user: 'noreply@eosdaq.com',
      type: 'OAuth2',
      clientId: '870612167639-cicfd405me73g9a55d8r2eu4ofp7g0ql.apps.googleusercontent.com',
      clientSecret: 'VvsWf2IFZSYpKzyr1In5jN-U',
      refreshToken: '1/p2bBGv4tlK1fzHQvGctZsRDhLW4LCFJoSuZyGZs6328',
    },
  },
  tiffanyApi: `${envConfig.tiffanyApi}/api/v1/eosdaq`,
  burgundyApi: `${envConfig.burgundyApi}/api/v1`,
  jwtAccessKey: 'ca71593c2c84-4918-8162-106067ac5529',
  jwtRefreshKey: '85cfd2aa-caa9-45dc-ac6d-915a9f8daa10',
  jwtAccessTokenExpires: 28800,
  jwtRefreshTokenExpires: 120,
};

const config = Object.assign({}, envConfig, commonConfig);
module.exports = config;
