import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import {
  color,
  fontWeight,
  lineHeight,
  textAlign,
  fontFamily,
} from 'styled-system';

import Box from './Box';

function getFontSize({ fontSize }) {
  function buildCss(size) {
    return `font-size: ${size};`;
  }
  switch (fontSize) {
    case 'xs':
      return buildCss(12);
    case 'sm':
      return buildCss(14);
    case 'md':
      return buildCss(16);
    case 'lg':
      return buildCss(18);
    case 'xl':
      return buildCss(20);
    case undefined:
      return undefined;
    default:
      return buildCss(fontSize);
  }
}

const Text = styled(Box)`
  ${getFontSize}
  ${fontWeight}
  ${fontFamily}
  ${color}
  ${lineHeight}
  ${textAlign}
`;

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
};

export default Text;
