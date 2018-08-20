import React from 'react';
import styled, { css } from 'styled-components';
import { color, justifyContent } from 'styled-system';
import { colors } from '../css/theme';

const scale = (props) => {
  const { large, small } = props;

  if (large) {
    return ` 
      height: 62px;
    `;
  }

  if (small) {
    return `
      height: 36px;
      font-size: 14px;
    `;
  }

  return `
    height: 50px;    
  `;
};

const Button = styled.button`
  width: ${({ width }) => (width || 'auto')};
  border: none;
  margin: 0px;
  padding: 0px 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  padding: 0 32px;
  transition: .2s background ease;
  border-radius: 2px;
  cursor: pointer;
  display: flex;
  align-items: flex-end;
  ${justifyContent}
  ${scale}

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  & svg {
    display: inline-block;
    vertical-align: middle;
  }

  &:hover {
    background: rgba(0, 0, 0, .4);
  }

  ${({ primary }) => primary && css`
    color: white;
    fill: white;
    background-color: ${colors.blue500};

    &:hover {
      background-color: ${colors.blue600};
    }
  `}
`;

export const PlainButton = styled.button`
  border: 0;
  padding: 0 8px;
  font: inherit;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  background: transparent;
  cursor: pointer;
  ${color};
  display: inline-flex;
  align-items: center;
  border-radius: 2px;
  transition: .2s background-color ease;

  &:hover {
    background-color: rgba(0, 0, 0, .15);
  }

  & svg {
    margin: 0 4px;
  }
`;

export const IconButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 4px;
  ${({ small }) => small && `
    width: 20px;
    height: 20px;
  `}
  box-shadow: 0;
  outline: 0;
  border: 0;
  background: transparent;
  cursor: pointer;

  & svg {
    width: 100%;
    height: 100%;
    display: block;
  }

  &:hover {
    background: rgba(0, 0, 0, .02);
  }
`;

export const TextButton = styled.button`
  background: transparent;
  border: 0;
  outline: 0;
  color: #ddd;
  fill: currentColor;
  cursor: pointer;
  font: inherit;
  padding: 4px 8px;
  appearance: none;
  transition: .2s color ease;

  &:hover {
    color: #fff;
  }
`;

export default Button;
