import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: none;
  margin: 0px;
  padding: 0px 8px;
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  transition: .2s background ease;
  border-radius: 4px;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  & svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }

  &:hover {
    background: rgba(0, 0, 0, .4);
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
