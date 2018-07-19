import React from 'react';
import styled, { css } from 'react-emotion';
import tag from 'clean-tag';

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
  flex,
  display,
  borderRadius,
  maxHeight,
} from 'styled-system';

const Box = styled(tag)`
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
  ${flex}
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
