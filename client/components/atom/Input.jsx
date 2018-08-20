import React from 'react';
import styled from 'styled-components';
import theme, { colors } from '../css/theme';

export const InputControl = styled.div`
  & label {
    font-size: 13px;
    display: block;
    color: ${colors.grey600};
  }
`;

const Input = styled('input')`
  height: 36px;
  background: white;
  border-radius: 2px;
  max-width: 280px;
  font-size: 14px;
  border: 1px solid #efefef;
  padding: 4px 8px;
  margin: 8px 0 20px 0;
  width: 100%;

  &:focus, &:active {
    background: white;
    outline: 0;
    border: 1px solid ${colors.azure};
    box-shadow: 0px 0px 4px ${colors.azureA60};
  }
`;

export const NumberInput = Input.extend`
  appearance: none;
  font-family: ${theme.fontFamily.number};
  font-size: 15px;
  letter-spacing: 1px;
  appearance: textfield;
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
