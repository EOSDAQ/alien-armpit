import styled from 'react-emotion';
import {
  space,
  width,
  height,
  maxWidth,
  maxHeight,
  minWidth,
  minHeight,
  display,
} from 'styled-system';

const Image = styled.img`
  ${space}
  ${display}
  ${width}
  ${height}
  ${maxWidth}
  ${maxHeight}
  ${minWidth}
  ${minHeight}
`;

export default Image;
