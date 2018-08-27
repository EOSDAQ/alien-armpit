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
  googleOtp: {
    qrCode: {
      url: 'https://chart.googleapis.com/chart',
      param: 'chs=80x80&cht=qr&chl=80x80&chld=M|0&cht=qr&chl=otpauth://totp/eosdaq.com:{{accountName}}%3Fsecret%3D',
    },
  },
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
};

const config = Object.assign({}, envConfig, commonConfig);
module.exports = config;
