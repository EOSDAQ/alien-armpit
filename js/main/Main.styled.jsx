import React from 'react';
import posed from 'react-pose';
import Text from '../common/components/atom/Text';
import Box from '../common/components/atom/Box';
import Flex from '../common/components/atom/Flex';

const poseConfig = (delay = 0) => ({
  appear: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 800,
    },
  },
  hide: { opacity: 0, y: 30 },
});

const PosedHeadline = posed.div(poseConfig(300));
const PosedSubHeadline = posed.div(poseConfig(500));
const PosedContent = posed.div(poseConfig(800));

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
  <PosedHeadline pose={pose ? 'appear' : 'hide'}>
    <Text
      {...props}
      color="grey900"
      fontSize={32}
      lineHeight={1.3}
      fontWeight={700}
    >
      {children}
    </Text>
  </PosedHeadline>
);

export const SubHeadline = ({ children, pose }) => (
  <PosedSubHeadline
    pose={pose ? 'appear' : 'hide'}
  >
    <Box maxWidth={600}>
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
  </PosedSubHeadline>
);

export const ContentWrapper = ({ pose, children }) => (
  <PosedContent pose={pose ? 'appear' : 'hide'}>
    <Flex flexWrap="wrap" mt={32}>
      {children}
    </Flex>
  </PosedContent>
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
