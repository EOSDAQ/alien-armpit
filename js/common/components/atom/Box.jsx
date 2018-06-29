import React from 'react';
import styled, { css } from 'react-emotion';
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
  ${props => props.overflow && css`
    overflow: ${props.overflow};
  `}
  ${props => props.userSelect && css`
    user-select: ${props.userSelect};
  `}
  ${props => props.pointerEvents && css`
    pointer-events: ${props.pointerEvents};
  `}
`

export default Box;
