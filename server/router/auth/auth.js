const express = require('express');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');
const router = express.Router();
const mail = require('nodemailer');



router.get('/verify-email', (req, res) => {
  const tempHash = encodeURIComponent(crypto.createHash('sha512').update(Date.now().toString(16)).digest('base64'));

  const smtp = mail.createTransport({  
    service: 'Gmail',
    auth: {
        user: 'noreply@eosdaq.com',
        type: 'OAuth2',
        clientId: '870612167639-cicfd405me73g9a55d8r2eu4ofp7g0ql.apps.googleusercontent.com',
        clientSecret: 'VvsWf2IFZSYpKzyr1In5jN-U',
        refreshToken: '1/p2bBGv4tlK1fzHQvGctZsRDhLW4LCFJoSuZyGZs6328',
        // pass: 'TGJ>y3gh',
    },
  });

  const templatePath = path.resolve(__dirname, 'confirm.html');
  fs.readFile(templatePath, 'utf-8', (err, data) => {
    const mailOptions = {  
      from: 'EOSDAQ <noreply@eosdaq.com>',
      to: 'indegser@gmail.com',
      subject: 'Verify your email address. indegser',
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
  // Backend api goes here.

  res.redirect('/');
});

module.exports = router;
