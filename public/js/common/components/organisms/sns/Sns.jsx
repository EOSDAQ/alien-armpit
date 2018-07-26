import React from 'react';
import Flex from '../../atom/Flex';
import Icon from '../../atom/Icon';
import Box from '../../atom/Box';
import { SnsIcon } from './Sns.styled';
import Select from '../../molecules/Select';
import { SelectOption } from '../../molecules/Select.styled';

const links = [
  {
    type: 'telegram',
    href: [
      { label: '한국어 채널', value: 'https://t.me/EOSDAQ_KOR' },
      { label: 'English Channel', value: 'https://t.me/EOSDAQ' },
    ],
  },
  {
    type: 'twitter',
    href: 'https://twitter.com/EOSDAQ_DEX',
  },
  {
    type: 'kakaoTalk',
    href: 'https://open.kakao.com/o/gKYMrMP',
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

const Sns = ({ bg = 'dark' }) => {
  return (
    <Flex>
      {links.map(social => (
        <Box key={social.type} px={16}>
          {Array.isArray(social.href) ? (
            <Select
              direction={{
                bottom: 40,
                left: 0,
              }}
              options={social.href.map(href => (
                <SelectOption key={href.value}>
                  <a
                    href={href.value}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {href.label}
                  </a>
                </SelectOption>
              ))}
            >
              <SnsIcon bg={bg}>
                <Icon
                  type={social.type}
                />
              </SnsIcon>
            </Select>
          ) : (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <SnsIcon bg={bg}>
                <Icon
                  type={social.type}
                />
              </SnsIcon>
            </a>
          )}
        </Box>
      ))}
    </Flex>
  );
}

export default Sns;
