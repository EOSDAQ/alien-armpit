import React from 'react';
import Box from '../atom/Box';
import { Container } from '../../../main/main.styled';
import { Flex } from '../atom/Flex';

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
      <nav>
        <Box
          bg="primaryDark"
          color="whiteA7"
        >
          <Container pb="4px">
            <Flex alignItems="center">
              <div>
                <img 
                  src="/images/ic-logo.png"
                  style={{
                    height: 25,
                    marginTop: 4,
                  }}
                />
              </div>
              {this.navs.map((nav) => {
                return (
                  <Box 
                    key={nav}
                    ml={48}
                  >
                    {nav}
                  </Box>
                )
              })}
            </Flex>
          </Container>
        </Box>
      </nav>
    );
  }
}

export default Header;
