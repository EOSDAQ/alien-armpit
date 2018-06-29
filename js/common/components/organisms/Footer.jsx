import React from 'react';
import { css } from 'emotion';
import { Container } from '../../../main/main.styled';
import { Flex } from '../atom/Flex';
import Box from '../atom/Box';
import { Text } from '../atom/Text';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <Box
          bg="primaryDark"
          color="whiteA7"
          py={8}
        >
          <Container py={16}>
            <Box
              pb={24}
            >
              
            </Box>
            <Flex justifyContent="flex-end" >
              <Text color="whiteA7" fontSize={12}>
                Copyright 2018 EOSDAQ.com (Inc) All rights reserved.
              </Text>
            </Flex>
          </Container>
        </Box>
      </footer>
    )
  }
}

export default Footer;
