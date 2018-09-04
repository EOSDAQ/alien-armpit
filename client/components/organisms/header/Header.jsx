import React from 'react';
import { translate } from 'react-i18next';
import { Link } from '@reach/router';
import Box, { Container } from '../../atom/Box';
import Flex from '../../atom/Flex';
import Text from '../../atom/Text';
import Language from '../language/Language';
import { HeaderStyled, HeaderNavItem } from './Header.styled';
import HeaderAuthenticate from './HeaderAuthenticate';
import { staticPath } from 'constants/constants';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.navs = [
      { title: 'exchange', link: '/exchange/HORUS_EOS' },
      { title: 'wallet', link: '/wallet' },
      { title: 'support', link: '/support' },
    ];
  }

  render() {
    const { t } = this.props;

    return (
      <HeaderStyled>
        <Container
          large
          py={4}
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
                  src={`${staticPath.images}/ic-logo.png`}
                  alt=""
                  style={{
                    width: 88,
                    marginTop: 4,
                  }}
                />
              </Link>
              {this.navs.map(nav => (
                <HeaderNavItem
                  key={nav.title}
                >
                  <Link
                    to={nav.link}
                    key={nav.title}
                  >
                    {t(`header.${nav.title}`)}
                  </Link>
                </HeaderNavItem>
              ))}
            </Flex>
            <Flex
              alignItems="center"
            >
              <HeaderAuthenticate />
              <Language />
            </Flex>
          </Flex>
        </Container>
      </HeaderStyled>
    );
  }
}

export default translate('common')(Header);
