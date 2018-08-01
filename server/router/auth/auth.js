const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const express = require('express');
const bodyParser = require('body-parser');
const mail = require('nodemailer');
const router = express.Router();

router.post('/verify-email', bodyParser.json(), (req, res) => {
  const {
    email,
    publicKey,
    timestamp,
  } = req.body;
  
  const tempHash = encodeURIComponent(crypto.createHash('sha512').update(email).digest('base64'));
  // tell backend to save tempUser with body data.

  const smtp = mail.createTransport({  
    service: 'Gmail',
    auth: {
        user: 'noreply@eosdaq.com',
        type: 'OAuth2',
        clientId: '870612167639-cicfd405me73g9a55d8r2eu4ofp7g0ql.apps.googleusercontent.com',
        clientSecret: 'VvsWf2IFZSYpKzyr1In5jN-U',
        refreshToken: '1/p2bBGv4tlK1fzHQvGctZsRDhLW4LCFJoSuZyGZs6328',
    },
  });

  const templatePath = path.resolve(__dirname, 'confirm.html');
  fs.readFile(templatePath, 'utf-8', (err, data) => {
    const mailOptions = {  
      from: 'EOSDAQ <noreply@eosdaq.com>',
      to: email,
      subject: `Confirm your email address. ${email.split('@')[0]}`,
      html: data.replace('{{REDIRECT_URI}}', `http://localhost:3000/mail/verify/${tempHash}`),
    };
  
    smtp.sendMail(mailOptions, (err, response) => {
      if (err) {
        console.error(err);
        res.status(404).send('err');
        return;
      }
  
      res.status(200).send();
    });
  })
  
});

router.get('/verify-email/:key', (req, res) => {
  const { key } = req.params;
  // Backend will verify this key(tempHash) with tempUser and authorize user.
  // [SUCCESS] -> go to /register/success
  // [FAIL] -> go to /register/fail

  res.redirect(`/register/success#${key}`);
});

module.exports = router;
