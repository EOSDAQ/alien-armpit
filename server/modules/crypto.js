const crypto = require('crypto');
const config = require('../config');

const alogorithm = 'aes-256-ctr';
const password = config.key;

const encrypt = (text) => {
  if (!text) {
    return text;
  }

  const cipher = crypto.createCipher(alogorithm, password);
  let crypted = cipher.update(text, 'utf8', 'hex');
  crypted += cipher.final('hex');
  return crypted;
};

const decrypt = (text) => {
  if (!text) {
    return text;
  }

  const decipher = crypto.createDecipher(alogorithm, password);
  let dec = decipher.update(text, 'hex', 'utf8');
  dec += decipher.final('utf8');
  return dec;
};

module.exports = {
  encrypt,
  decrypt,
};