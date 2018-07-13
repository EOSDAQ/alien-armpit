import React from 'react';
import styled,
{ css } from 'react-emotion';
import {
  space,
  width,
  color,
  borders,
  maxWidth,
  minWidth,
  position,
  height,
  right,
  left,
  bottom,
  top,
  display,
  borderRadius,
  maxHeight,
} from 'styled-system';

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
  ${display}
  ${borderRadius}
  ${({ overflow }) => overflow && css`
    overflow: ${overflow};
  `}
  ${({ userSelect }) => userSelect && css`
    user-select: ${userSelect};
  `}
  ${({ pointerEvents }) => pointerEvents && css`
    pointer-events: ${pointerEvents};
  `}
  ${({ cursor }) => cursor && css`
    cursor: ${cursor};
  `}
`;

export default Box;
