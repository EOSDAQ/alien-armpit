const React = require('react');
const styled = require('styled-components').default;
const { StyleSheetManager } = require('styled-components');

const Table = styled('table')`
  max-width: 480px;
`;

const Title = styled('tr')`
  font-size: 20px;
  color: #222;
  font-weight: bold;
`;

const Body = styled('tr')`
  color: #444;
  font-size: 14px;
  line-height: 1.6;
`;

const Link = styled('a')`
  color: #08f;
`;

const VerifyEmail = (sheet, url, name, email) => {
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <Table>
        <tbody>
          <Title>
            Confirm Your Email
          </Title>
          <Body>
            Hey <strong>{name}</strong>,
            <div></div>
            We received a request to set your EOSDAQ email to {email}. If this is correct, please confirm by clicking the button below.
          </Body>
          <Link href={url} target="_blank">
            Click to confirm
          </Link>
        </tbody>
      </Table>
    </StyleSheetManager>
  );
}

module.exports = VerifyEmail;
