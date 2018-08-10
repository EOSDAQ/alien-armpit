module.exports = {
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
  key: 'VE9PVafdlrSNXlUjQBERO6A5a8d04V',
};
