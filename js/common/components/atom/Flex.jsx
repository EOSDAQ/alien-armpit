import React from 'react';
import styled from 'react-emotion';
import {
  flex,
  flexDirection,
  flexWrap,
  alignItems,
  justifyContent,
} from 'styled-system';

import Box from './Box';

const Flex = styled(Box)`
  ${flex}
  ${flexDirection}
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${({ display }) => !display && 'display: flex;'}
`;

export const FlewRow = Flex;

export const FlexColumn = props => (
  <Flex
    flexDirection="column"
    {...props}
  />
);

export default Flex;
