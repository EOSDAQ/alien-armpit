import React from 'react';
import Text from '../common/components/atom/Text';
import Box from '../common/components/atom/Box';
import Flex from '../common/components/atom/Flex';
import animations from '../common/css/animations';

export const Section = props => (
  <Box
    pt={[50, 80]}
    pb={[0, 80]}
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

export const SectionLabel = ({ children, ...props }) => (
  <Box
    bg="#fafafa"
    borderRadius={3}
    display="inline-block"
    px={8}
    py={4}
    mb={24}
  >
    <Text
      fontSize={14}
      color="grey400"
      {...props}
    >
      {children}
    </Text>
  </Box>
);

export const Headline = ({ pose, children, ...props }) => (
  <Text
    color="grey800"
    fontSize={[32, 48]}
    lineHeight={1.14}
    fontWeight="bold"
    // textAlign="center"
    css={animations.appearY(pose, { delay: '300ms' })}
    {...props}
  >
    {children}
  </Text>
);

export const SubHeadline = ({ children, pose, ...props }) => (
  <Box
    css={animations.appearY(pose, { delay: '600ms' })}
  >
    <Text
      fontSize={18}
      lineHeight={1.46}
      color="grey800"
      // textAlign="center"
      mt={32}
      mb={60}
      {...props}
    >
      {children}
    </Text>
  </Box>
);

export const ContentWrapper = ({ pose, children, ...props }) => (
  <Flex
    flexWrap="wrap"
    mt={32}
    {...props}
    css={animations.appearY(pose, { delay: '900ms' })}
  >
    {children}
  </Flex>
);

export const Content = props => (
  <Box
    width={['100%', 1 / 2]}
    pr={[0, 40]}
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
      fontSize={[18, 17]}
      fontWeight={600}
      color="grey800"
      {...props}
    />
  </div>
);

export const Description = props => (
  <Text
    fontSize={[16, 14]}
    lineHeight={1.75}
    color="grey700"
    mt={8}
    {...props}
  />
);
