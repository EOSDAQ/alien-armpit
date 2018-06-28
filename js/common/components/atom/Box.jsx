import React from 'react';
import styled from 'react-emotion';
import { space, width, color, borders, maxWidth, minWidth, position, height } from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${borders}
  ${maxWidth}
  ${minWidth}
  ${position}
`

export default Box;
