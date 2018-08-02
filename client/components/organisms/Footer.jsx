import React from 'react';
import { Container } from 'pages/main/Main.styled';
import Flex from '../atom/Flex';
import Box from '../atom/Box';
import Text from '../atom/Text';
import Sns from './sns/Sns';

const Footer = () => (
  <footer>
    <Box
      bg="#141A2A"
      color="grey400"
      py={8}
    >
      <Container py={16}>
        <Box pb={24}>
          <Sns />
        </Box>
        <Flex justifyContent="flex-end">
          <Text fontSize={12}>
            Copyright 2018 EOSDAQ.com (Inc) All rights reserved.
          </Text>
        </Flex>
      </Container>
    </Box>
  </footer>
);

export default Footer;
