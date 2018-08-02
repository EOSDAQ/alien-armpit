import React from 'react';
import { translate } from 'react-i18next';
import { Link } from 'react-router-dom';
import Box, { Container } from '../../atom/Box';
import Flex from '../../atom/Flex';
import Text from '../../atom/Text';
import Language from '../language/Language';
import { HeaderStyled } from './Header.styled';
import HeaderAuthenticate from './HeaderAuthenticate';
import { staticPath } from 'constants/constants';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.navs = [
      { title: 'exchange', link: '/exchange' },
      { title: 'wallet', link: '/wallet' },
      { title: 'support', link: '/support' },
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
            large="123"
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
                    src={`${staticPath.images}/ic-logo.png`}
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
                      // style={{ cursor: nav.link ? '' : 'not-allowed' }}
                    >
                      {t(`header.${nav.title}`)}
                    </Link>
                  </Text>
                ))}
              </Flex>
              <Flex>
                <HeaderAuthenticate />
                <Language />
              </Flex>
            </Flex>
          </Container>
        </Box>
      </HeaderStyled>
    );
  }
}

export default translate('common')(Header);
