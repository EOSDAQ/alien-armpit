const React = require('react');
const styled = require('styled-components').default;
const { StyleSheetManager } = require('styled-components');

const Section = styled('table')`
  width: 100%;
  max-width: 480px;
  border-spacing: 0px;
  border-collapse: collapse;
  border: 0;
  font-family: -apple-system, BlinkMacSystemFont, Roboto, Segoe UI, Noto Sans CJK KR, Apple SD Gothic Neo;
`;

const Title = styled('td')`
  font-size: 24px;
  color: #222;
  font-weight: bold;
`;

const Body = styled('div')`
  font: inherit;
  font-size: 16px;
  line-height: 1.6em;
  color: #191516;
`;

const Link = styled('a')`
  font-size: 16px;
  text-decoration: none;
`;

const Button = styled('p')`
  background: white;
  border: 1px solid #4d90fe;
  border-radius: 2px;
  padding: 10px 0;
  text-align: center;
  font: inherit;
  font-size: 15px;
  color: #1155d3;
  width: 100%;
  font-weight: 500;
  max-width: 160px;
`;

const Space = ({ height = 32 }) => 
  <Section>
    <tr>
      <td height={height} />
    </tr>
  </Section>;

const Line = styled('td')`
  padding: 0;
  width: 100%;
  border-collapse: collapse;
  background-color: #ddd;
  border-bottom: 1px solid #444;
`;

const Divider = () =>
  <Section>
    <Space height={32} />
    <tbody>
      <tr>
        <Line height="1" />
      </tr>
    </tbody>
    <Space height={16} />
  </Section>;

const Logo = () => 
  <Section>
    <tr>
      <td align="right">
        <img
          style={{
            display: 'block',
            width: 120,
          }}
          src="https://eosdaq.com/images/ic-eosdaq-with-text.png" 
        />
      </td>
    </tr>
  </Section>;

const Footnote = styled('span')`
  color: #7F7F7F;
  line-height: 1.4;
  font-size: 12px;
`;

const VerifyEmail = (sheet, lng, url, name, email) => {
  return (
    <StyleSheetManager sheet={sheet.instance}>
      <React.Fragment>
        <Space height={20} />
        <Logo />
        <Space height={20} />
        <Section>
          <tbody>
            <tr>
              <Title>
                Confirm Your Email
              </Title>
            </tr>
          </tbody>
        </Section>
        <Space height={16} />
        <Section>
          <tr>
            <Body>
              Hey <strong>{name}</strong>, We received a request to set your EOSDAQ email to {email}. If this is correct, please confirm by clicking the button below.
            </Body>
          </tr>
        </Section>
        <Space height={16} />
        <Section>
          <tr>
            <td>
              <Link href={url} target="_blank">
                <Button>
                  Click to confirm
                </Button>
              </Link>
            </td>
          </tr>
        </Section>
        <Divider />
        <Section>
          <tr>
            <td>
              <Footnote>
                EOSDAQ은 이오스 기반 탈중앙화 거래소입니다. 편리하고 안전한 거래를 경험하세요.
              </Footnote>
            </td>
          </tr>
          <tr>
            <td>
              <Footnote>
                © 2018  EOSDAQ  ALL RIGHTS RESERVED
              </Footnote>
            </td>
          </tr>
        </Section>
      </React.Fragment>
    </StyleSheetManager>
  );
}

module.exports = VerifyEmail;
