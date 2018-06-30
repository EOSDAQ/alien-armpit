import React from 'react';
import styled from 'react-emotion';
import { Text } from '../common/components/atom/Text';
import Box from '../common/components/atom/Box';

export const Blur = (props) => {
  return (
    <Box 
      {...props}
      position="absolute"
      bottom={0}
      right={0}
    >
      <img src={`/images/blur-${props.type}.png`} />
    </Box>
  )
}

export const Section = (props) =>
  <Box 
    py={80}
    m={16}
    overflow="hidden"
    position="relative"
    css={`
      // border: 1px solid rgba(0, 0, 0, 0.07);
      // box-shadow: 0px 5px 5px rgba(0, 0, 0, .1);
      // border-radius: 4px;
      // background: rgba(255, 255, 255, .5);
      // margin-bottom: 48px;
    `}
    {...props}
  />;

export const Container = (props) =>
  <Box 
    maxWidth={980} 
    mx="auto"
    px={24}
    {...props} 
  />;

export const Headline = styled.h1`
  font-size: 40px;
  line-height: 1.3;
  // font-weight: bold;
`

export const SubHeadline = ({ children }) => {
  return (
    <Box maxWidth={600}>
      <Text
        fontSize={20}
        lineHeight={1.46}
        // fontWeight={700}
        color="grey"
        mt={16}
        mb={80}
      >
        {children}
      </Text>
    </Box>
  )
}

export const ContentWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 32px;
`

export const Content = (props) => {
  return (
    <Box
      width={["100%", 1/2]}
      pr={[40, 80]}
      mb={[80, 0]}
      flex="0 0 auto"
      {...props}
    />
  );
}

export const ContentTitle = (props) => {
  return (
    <div
      style={{
        borderBottom: `1px solid rgba(180, 180, 180, .5)`,
        paddingBottom: 8,
      }}
    >
      <Text 
        fontSize={17}
        fontWeight={600}
        color="#rgb(51, 51, 51)"
        {...props}
      />
    </div>
  );
}

export const Description = (props) => {
  return (
    <Text 
      fontSize={16}
      lineHeight={1.52947}
      color="rgba(51, 51, 51, .78)"
      mt={12}
      {...props}
    />
  );
}