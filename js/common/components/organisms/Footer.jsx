import React from 'react';
import { css } from 'emotion';
import { Container } from '../../../main/main.styled';
import { Flex } from '../atom/Flex';

class Footer extends React.Component {
  render() {
    return (
      <footer css={`background-color: #3A3939; color: aaa;`}>
        <Container py={16}>
          <Flex>
            Copyright 2018 EOSDAQ.com (Inc) All rights reserved.
          </Flex>
        </Container>
      </footer>
    )
  }
}

export default Footer;
