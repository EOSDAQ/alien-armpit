import React from 'react';
import styled, { css } from 'react-emotion';
import { space, width, color, borders, maxWidth, minWidth, position, height, right, left, bottom, top, display, borderRadius, maxHeight } from 'styled-system';

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${borders}
  ${maxWidth}
  ${maxHeight}
  ${minWidth}
  ${position}
  ${top}
  ${bottom}
  ${left}
  ${right}
  ${fontSize}
  ${display}
  ${borderRadius}
  ${fontSize}
  ${props => props.overflow && css`
    overflow: ${props.overflow};
  `}
  ${props => props.userSelect && css`
    user-select: ${props.userSelect};
  `}
  ${props => props.pointerEvents && css`
    pointer-events: ${props.pointerEvents};
  `}
  ${props => props.cursor && css`
    cursor: ${props.cursor};
  `}
`

export default Box;
