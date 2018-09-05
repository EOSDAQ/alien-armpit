const ecc = require('eosjs-ecc')

const verify = (signature, data, key) => {
  return ecc.verify(
    signature,
    data,
    key,
  )
}

module.exports = {
  verify,
}
