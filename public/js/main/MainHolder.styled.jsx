import React from 'react';
import Box from '../common/components/atom/Box';
import Icon from '../common/components/atom/Icon';
import Text from '../common/components/atom/Text';
import animations from '../common/css/animations';
import Flex from '../common/components/atom/Flex';

export const EOSFeature = ({ children, animate, delay, color }) => (
  <Flex
    mr={16}
    mb={16}
    pr={16}
    pl={8}
    bg={color}
    borderRadius={50}
    alignItems="center"
    style={{
      boxShadow: '0px 1px 1px rgba(0, 0, 0, .1)',
    }}
    css={animations.appearFromRight(animate, { delay: delay + 'ms' } )}
  >
    {children}
  </Flex>
);

export const Badge = ({ type }) => (
  <Box
    width={48}
    height={48}
  >
    <Icon
      type={type}
    />
  </Box>
);

export const BadgeLabel = ({ children, color }) => (
  <Box>
    <Text
      fontSize={14}
      color={color}
      fontWeight={500}
      textAlign="center"
    >
      {children}
    </Text>
  </Box>
);
