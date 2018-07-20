import React from 'react';
import styled from 'react-emotion';
import {
  fontWeight,
  fontSize,
  lineHeight,
  textAlign,
  fontFamily,
} from 'styled-system';

import Box from './Box';
import theme from '../../css/theme';

const Text = styled(Box)`
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${lineHeight}
  ${textAlign}
`;

export const Number = styled.span`
  letter-spacing: .5px;
  font-family: ${theme.fontFamily.number};
`;

export const Code = styled.span`
  font-family: ${theme.fontFamily.mono};
`;

export default Text;
