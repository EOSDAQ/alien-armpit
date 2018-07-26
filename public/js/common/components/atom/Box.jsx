// @flow

import * as React from 'react';
import styled, { css } from 'styled-components';
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
  ${({ css: cssProps }) => cssProps && cssProps}
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

type ContainerProps = {
  large?: boolean,
}

export const Container: React.ComponentType<ContainerProps> = Box.extend`
  max-width: ${({ large }) => large ? '1280px' : '980px'};
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin: 0 auto;
`;

export default Box;
