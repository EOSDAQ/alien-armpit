const fs = require('fs');
const path = require('path');
const mail = require('nodemailer');
const config = require('../config');

const sendVerifyEmail = async (accountName, email, hash) => {
  const smtp = mail.createTransport(config.mail);
  const templatePath = path.resolve(__dirname, '../resource/confirm.html');
  const splittedEmail = email.split('@');
  try {
    const data = fs.readFileSync(templatePath, 'utf-8');
    const url = `${config.url}/account/verifyEmail/${accountName}/${hash}`;
    const mailOptions = {
      from: 'EOSDAQ <noreply@eosdaq.com>',
      to: email,
      subject: `Confirm your email address. ${splittedEmail[0]}`,
      html: data.replace('{{REDIRECT_URI}}', url),
    };

    const result = await smtp.sendMail(mailOptions);
    return result;
  } catch (err) {
    throw new Error(err);
  }
};

module.exports = {
  sendVerifyEmail,
};
