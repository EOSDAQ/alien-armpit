const express = require('express');
const router = express.Router();
const mail = require('nodemailer');



router.get('/verify', (req, res) => {
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
  
  const mailOptions = {  
    from: 'EOSDAQ <noreply@eosdaq.com>',
    to: 'indegser@gmail.com',
    subject: 'Nodemailer 테스트',
    text: '평문 보내기 테스트 '
  };

  smtp.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error(err);
      res.status(404).send('err');
      return;
    }

    console.log('RESP', response);
    res.status(200).send();
  });
});

module.exports = router;
