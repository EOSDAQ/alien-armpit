import React from 'react';
import Box from '../atom/Box';
import { Container } from '../../../main/Main.styled';
import Flex from '../atom/Flex';
import Text from '../atom/Text';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.navs = [
      'Exchange',
      'Wallet',
      'Support',
    ];
  }

  render() {
    return (
      <nav
        css="position: sticky;
        z-index: 1;
        top: 0;"
      >
        <Box
          bg="primaryDark"
          color="whiteA7"
        >
          <Container py={8}>
            <Flex alignItems="center">
              <div>
                <img
                  src="/images/ic-logo.png"
                  alt=""
                  style={{
                    height: 25,
                    marginTop: 4,
                  }}
                />
              </div>
              {this.navs.map(nav => (
                <Text
                  key={nav}
                  ml={48}
                  fontSize={14}
                >
                  {nav}
                </Text>
              ))}
            </Flex>
          </Container>
        </Box>
      </nav>
    );
  }
}

export default Header;
