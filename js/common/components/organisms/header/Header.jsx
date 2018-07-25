import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box, { Container } from '../../atom/Box';
import Flex from '../../atom/Flex';
import Text from '../../atom/Text';
import Language from '../language/Language';
import { HeaderStyled } from './Header.styled';

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
      <HeaderStyled>
        <Box
          bg="#141A2A"
          color="grey100"
        >
          <Container
            large
            py={12}
          >
            <Flex
              justifyContent="space-between"
              alignItems="center"
            >
              <Flex
                alignItems="center"
              >
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
                {this.navs.map(nav => (
                  <Text
                    key={nav.title}
                    ml={48}
                    fontSize={14}
                    display={['none', 'block']}
                  >
                    <Link
                      to={nav.link}
                      key={nav.title}
                      style={{ cursor: nav.link ? '' : 'not-allowed' }}
                    >
                      {t(`header.${nav.title}`)}
                    </Link>
                  </Text>
                ))}
              </Flex>
              <Language />
            </Flex>
          </Container>
        </Box>
      </HeaderStyled>
    );
  }
}

export default translate('common')(Header);
