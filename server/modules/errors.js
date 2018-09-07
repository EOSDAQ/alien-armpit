const HttpError = require('http-errors');

const JwtNotAuthorizedError = HttpError(401, 'Jwt Authorization failed', { code: 1401 });
const WrongUserHasTokenError = HttpError(401, 'Token owner is wrong', { code: 2401 });
const NeedAccessTokenError = HttpError(400, 'It needs Access Token for paramter', { code: 1400 });

module.exports = {
  JwtNotAuthorizedError,
  WrongUserHasTokenError,
  NeedAccessTokenError,
  HttpError,
};
