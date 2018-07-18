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

const Text = styled(Box)`
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${lineHeight}
  ${textAlign}
`;

export default Text;
