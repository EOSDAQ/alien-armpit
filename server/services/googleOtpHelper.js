/* todo - che: 다른 crypto 모듈로 변경 */
const JsSHA = require('jssha');
const cipher = require('./cipher');

const {
  dec2hex,
  hex2dec,
  base32tohex,
  leftpad,
} = cipher;

const getOtp = (secret) => {
  const key = base32tohex(secret);
  const epoch = Math.round(new Date().getTime() / 1000.0);
  const time = leftpad(dec2hex(Math.floor(epoch / 30)), 16, '0');

  const shaObj = new JsSHA('SHA-1', 'HEX');
  shaObj.setHMACKey(key, 'HEX');
  shaObj.update(time);
  const hmac = shaObj.getHMAC('HEX');
  const offset = hex2dec(hmac.substring(hmac.length - 1));
  const otp = `${hex2dec(hmac.substr(offset * 2, 8)) & hex2dec('7fffffff')}`;
  return (otp).substr(otp.length - 6, 6);
};

const generateSecretKey = () => cipher.generateBase32str(16);

module.exports = {
  getOtp,
  generateSecretKey,
};
