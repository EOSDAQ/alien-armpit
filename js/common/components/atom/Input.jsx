import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../css/theme';

const Input = styled('input')`
  height: 30px;
  background: white;
  border-radius: 4px;
  max-width: 280px;
  font-size: 14px;
  border: 1px solid ${colors.grey200};
`;

export default Input;
