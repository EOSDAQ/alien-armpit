import React from 'react';
import styled from 'styled-components';
import { colors } from '../css/theme';

const Input = styled('input')`
  height: 30px;
  background: white;
  border-radius: 4px;
  max-width: 280px;
  font-size: 14px;
  border: 0;

  &:focus, &:active {
    background: white;
    outline: 0;
    border-color: ${colors.blue300};
    box-shadow: 0px 0px 5px #8CAEE5;
  } 
`;

const scale = (props) => {
  const {
    large,
  } = props;

  if (large) {
    return `
      height: 48px;
      padding-left: 12px;
      padding-right: 12px;
      font-size: 14px;
    `;
  }

  return `
    height: 30px;
    font-size: 14px;
  `;
};

export const GreyBorderInput = styled('input')`
  width: ${({ width }) => (width || '100%')};
  background-color: tranparent;
  border: 1px solid ${colors.grey200};
  border-radius: 4px;
  ${scale}

  &:focus, &:active {
    outline: 0;
  }
`;

export default Input;
