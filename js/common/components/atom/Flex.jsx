import React from 'react';
import styled from 'react-emotion';
import { flex, flexDirection, flexWrap, justifySelf, alignItems } from 'styled-system';
import Box from './Box';

export const Flex = styled(Box)`
  display: flex;
  ${flex}
  ${flexDirection}
  ${alignItems}
  ${justifySelf}
  ${flexWrap}
`

export const FlewRow = Flex;

export const FlexColumn = (props) =>
  <Flex  flexDirection="column" {...props} />;

