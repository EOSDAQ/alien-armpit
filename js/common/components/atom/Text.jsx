import React from 'react';
import styled from 'react-emotion';
import { space, width, color, fontSize, fontWeight, lineHeight, textAlign } from 'styled-system';

export const Text = styled.div`
  ${fontSize}
  ${fontWeight}
  ${color}
  ${space}
  ${lineHeight}
  ${textAlign}
`;
