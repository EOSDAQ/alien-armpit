const importJsx = require('import-jsx');
const { ServerStyleSheet } = require('styled-components');
const { renderToStaticMarkup } = require('react-dom/server');
const mail = require('nodemailer');
const config = require('../config');

const renderEmail = (path, lng, ...props) => {
  const sheet = new ServerStyleSheet();
  const app = importJsx(path);

  let dom = renderToStaticMarkup(
    app(sheet, lng, ...props),
  );

  const styles = sheet.getStyleTags();
  const [_, className] = /="(.+)"/.exec(styles);
  const classes = className.split(' ');
  const styleMap = classes.reduce((res, className) => {
    const match = new RegExp(`\.${className}{(.+)}`).exec(styles);
    if (match) {
      const [_, style] = match;
      res[className] = style;
    }
    return res;
  }, {});

  dom = dom.replace(/class="[\w-]+\s([\w-]+)"/g, (match, key) => {
    let style = styleMap[key];
    if (style) {
      return `style="${style}"`;
    } else {
      return match;
    }
  });

  return `
    <html>
      <body>
        ${dom}
      </body>
    </html>
  `;
}

const sendVerifyEmail = async (req, accountName, email, hash) => {
  const lng = req.headers['language'];
  const smtp = mail.createTransport(config.mail);
  const splittedEmail = email.split('@');
  const baseUrl = req.protocol + '://' + req.get('host');
  const url = `${baseUrl}/api/v1/account/verifyEmail/${accountName}/${email}/${hash}`;
  
  try {
    const html = renderEmail(
      '../resource/VerifyEmail.jsx',
      lng,
      url,
      accountName,
      email,
    );

    const mailOptions = {
      from: 'EOSDAQ <noreply@eosdaq.com>',
      to: email,
      subject: `Confirm your email address. ${splittedEmail[0]}`,
      html,
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
