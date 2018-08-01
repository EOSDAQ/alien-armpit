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
    subject: 'Verify your email address. indegser',
    html: '<a href="http://localhost:3000/mail/verify/12Qd3cF" target="_blank">verify!</a>'
  };

  smtp.sendMail(mailOptions, (err, response) => {
    if (err) {
      console.error(err);
      res.status(404).send('err');
      return;
    }
    
    res.status(200).send();
  });
});

router.get('/verify/:key', (req, res) => {
  const { key } = req.params;
  // Backend api goes here.
  res.status(200).send('Successfully verified!');
})

module.exports = router;
