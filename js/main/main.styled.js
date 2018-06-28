import React from 'react';
import styled from 'react-emotion';
import { Text } from '../common/components/atom/Text';
import Box from '../common/components/atom/Box';

export const Section = (props) =>
  <Box pt={80} pb={72} {...props} />

export const Container = (props) =>
  <Box 
    maxWidth={980} 
    mx="auto"
    px={24}
    {...props} 
  />;

export const Headline = styled.h1`
  font-size: 48px;
  font-weight: bold;
`

export const SubHeadline = ({ children }) => {
  return (
    <Text
      fontSize={24}
      lineHeight={1.46}
      fontWeight={700}
      mt={32}
    >
      {children}
    </Text>
  )
}

export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 32px;
`

export const Content = styled.div`
  width: 50%;
  padding-right: 32px;
`

export const ContentTitle = styled(Text)({
  fontSize: 20,
  fontWeight: 700,
  color: "#222",
});

export const Description = styled(Text)({
  fontSize: 20,
  lineHeight: 1.46,
  color: `#000c`,
  marginTop: 16,
});