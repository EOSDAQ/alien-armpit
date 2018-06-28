import React from 'react';
import styled from 'react-emotion';
import { space, width, color, borders, maxWidth, minWidth, position, height, right, left, bottom, top } from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${borders}
  ${maxWidth}
  ${minWidth}
  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}
`

export default Box;