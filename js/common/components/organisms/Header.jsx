import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box from '../atom/Box';
import { Container } from '../../../main/Main.styled';
import Flex from '../atom/Flex';
import Text from '../atom/Text';
import Language from './language/Language';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.navs = [
      // { title: 'Exchange', link: '/exchange' },
      // { title: 'Wallet', link: '/wallet' },
      // { title: 'Support', link: '/support' },
      { title: 'exchange', link: '' },
      { title: 'wallet', link: '' },
      { title: 'support', link: '' },
    ];
  }

  render() {
    const { t } = this.props;

    return (
      <nav
        css={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
        }}
      >
        <Box
          bg="#141A2A"
          color="grey100"
        >
          <Container py={8}>
            <Flex alignItems="center">
              <div>
                <Link to="/">
                  <img
                    src="/images/ic-logo.png"
                    alt=""
                    style={{
                      height: 25,
                      marginTop: 4,
                    }}
                  />
                </Link>
              </div>
              {this.navs.map(nav => (
                <Link
                  to={nav.link}
                  key={nav.title}
                  style={{ cursor: nav.link ? '' : 'not-allowed' }}
                >
                  <Text
                    ml={48}
                    fontSize="sm"
                  >
                    {t(`header.${nav.title}`)}
                  </Text>
                </Link>
              ))}
              <Language />
            </Flex>
          </Container>
        </Box>
      </nav>
    );
  }
}

export default translate('common')(Header);
