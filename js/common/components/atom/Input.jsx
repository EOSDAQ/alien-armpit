import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../css/theme';

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

export default Input;
