import React from 'react';
import styled, { css } from 'react-emotion';
import {
  space,
  width,
  color,
  borders,
  maxWidth,
  minWidth,
  position,
  height,
  left,
  right,
  top,
  bottom,
  display,
  borderRadius,
  maxHeight,
  fontWeight,
  lineHeight,
  textAlign,
  fontFamily,
  boxShadow,
} from 'styled-system';
import { getFontSize } from './utils/utils';

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
  ${getFontSize}
  ${fontWeight}
  ${fontFamily}
  ${lineHeight}
  ${textAlign}
  ${boxShadow}
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
