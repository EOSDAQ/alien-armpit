import PropTypes from 'prop-types';
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

Text.propTypes = {
  fontSize: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  ]),
};

export default Text;
