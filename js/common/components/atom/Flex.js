import React from 'react';
import styled from 'react-emotion';
import { flex, flexDirection, flexWrap } from 'styled-system';

export const Flex = styled.div`
  display: flex;
  ${flex}
  ${flexDirection}
  ${flexWrap}
`

export const FlewRow = Flex;

export const FlexColumn = (props) =>
  <Flex  flexDirection="column" {...props} />;

