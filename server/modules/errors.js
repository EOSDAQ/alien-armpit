class BaseError extends Error {
  constructor(message, status, code) {
    super(message);
    this.name = this.constructor.name;
    Error.captureStackTrace(this, this.constructor);
    this.status = status || 500;
    this.code = code;
  }
}

class NotAuthorizedError extends BaseError {
  constructor(fields) {
    super('Authorization failed', 401, '0401');
    this.fields = fields || {};
  }
}

class WrongUserHasTokenError extends BaseError {
  constructor(fields) {
    super('Token owner is wrong', 401, '1401');
    this.fields = fields || {};
  }
}

module.exports = {
  NotAuthorizedError,
  WrongUserHasTokenError,
};
