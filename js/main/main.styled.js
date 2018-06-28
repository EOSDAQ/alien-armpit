import React from 'react';
import styled from 'react-emotion';
import { Text } from '../common/components/atom/Text';

export const Section = styled.section`
  padding: 140px 96px;
  max-width: 1200px;
  margin: 0 auto;
`;

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
  fontSize: 22,
  lineHeight: 1.46,
  color: `#000c`,
  marginTop: 16,
});