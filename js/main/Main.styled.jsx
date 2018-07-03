import React from 'react';
import { keyframes } from 'react-emotion';
import Text from '../common/components/atom/Text';
import Box from '../common/components/atom/Box';
import Flex from '../common/components/atom/Flex';
import animations from '../common/css/animations';

const appear = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 30px, 0);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

export const Section = props => (
  <Box
    py={120}
    position="relative"
    {...props}
  />
);

export const Container = props => (
  <Box
    maxWidth={980}
    mx="auto"
    px={24}
    {...props}
  />
);

export const Headline = ({ pose, children, ...props }) => (
  <Text
    {...props}
    color="grey900"
    fontSize={32}
    lineHeight={1.3}
    fontWeight={700}
    css={animations.appearY(pose, { delay: '300ms' })}
  >
    {children}
  </Text>
);

export const SubHeadline = ({ children, pose }) => (
  <Box
    maxWidth={600}
    css={animations.appearY(pose, { delay: '600ms' })}
  >
    <Text
      fontSize={20}
      lineHeight={1.46}
      color="grey"
      mt={16}
      mb={40}
    >
      {children}
    </Text>
  </Box>
);

export const ContentWrapper = ({ pose, children }) => (
  <Flex
    flexWrap="wrap"
    mt={32}
    css={animations.appearY(pose, { delay: '900ms' })}
  >
    {children}
  </Flex>
);

export const Content = props => (
  <Box
    width={['100%', 1 / 2]}
    pr={[40, 80]}
    mb={[80, 0]}
    flex="0 0 auto"
    {...props}
  />
);

export const ContentTitle = props => (
  <div
    style={{
      borderBottom: '1px solid rgba(180, 180, 180, .5)',
      paddingBottom: 8,
    }}
  >
    <Text
      fontSize={17}
      fontWeight={600}
      color="grey800"
      {...props}
    />
  </div>
);

export const Description = props => (
  <Text
    fontSize={16}
    lineHeight={1.75}
    color="grey600"
    mt={12}
    {...props}
  />
);
