import React from 'react';
import styled from 'react-emotion';
import { space, width, color, fontSize, fontWeight, lineHeight, textAlign, fontFamily } from 'styled-system';
import Box from './Box';

export const Text = styled(Box)`
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${color}
  ${space}
  ${lineHeight}
  ${textAlign}
`;
