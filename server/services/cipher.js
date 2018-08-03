/* RFC 4648 standard */
const base32chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const dec2hex = s => ((s < 15.5 ? '0' : '') + Math.round(s).toString(16));

const hex2dec = s => (parseInt(s, 16));

const base32tohex = (base32) => {
  let bits = '';
  for (let i = 0; i < base32.length; i += 1) {
    const val = base32chars.indexOf(base32.charAt(i).toUpperCase());
    bits += leftpad(val.toString(2), 5, '0');
  }

  let hex = '';
  for (let i = 0; i + 4 <= bits.length; i += 4) {
    const chunk = bits.substr(i, 4);
    hex += parseInt(chunk, 2).toString(16);
  }

  return hex;
};

const leftpad = (string, len, pad) => {
  let str = string;
  if (len + 1 >= str.length) {
    str = Array(len + 1 - str.length).join(pad) + str;
  }
  return str;
};

const randomStr = (length, chars) => {
  let result = '';
  for (let i = length; i > 0; i -= 1) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }
  return result;
};

const generateBase32str = (length) => (randomStr(length || 16, base32chars));

module.exports = {
  randomStr,
  dec2hex,
  hex2dec,
  base32tohex,
  leftpad,
  generateBase32str,
};
