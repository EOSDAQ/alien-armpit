import React from 'react';
import { Container } from '../../../main/Main.styled';
import Flex from '../atom/Flex';
import Box from '../atom/Box';
import Text from '../atom/Text';
import Icon from '../atom/Icon';

const socialLinks = [
  {
    type: 'twitter',
    href: 'https://twitter.com/EOSDAQ_DEX',
  },
  {
    type: 'kakaoTalk',
    href: 'https://open.kakao.com/o/gKYMrMP',
  },
  {
    type: 'telegram',
    href: 'https://t.me/EOSDAQ_KOR',
  },
  {
    type: 'linkedIn',
    href: 'https://www.linkedin.com/company/eosdaq/',
  },
  {
    type: 'mail',
    href: 'mailto:contact@eosdaq.com',
  },
];

const Footer = () => (
  <footer>
    <Box
      bg="#141A2A"
      color="grey400"
      py={8}
    >
      <Container py={16}>
        <Flex
          pb={24}
        >
          {socialLinks.map(social => (
            <Box key={social.type} px={16}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon
                  type={social.type}
                  css={`
                    fill: #aaa;
                    width: 20px;
                    height: 20px;
                    transition: .2s fill ease;

                    &:hover {
                      fill: white;
                    }
                  `}
                />
              </a>
            </Box>
          ))}
        </Flex>
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
