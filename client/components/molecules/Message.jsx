import React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../css/theme';

const Message = styled('div')`
  padding: .8rem 1rem;
  line-height: 1.6;
  font-size: 13px;
  margin: 1rem 0;
  border-radius: 4px;
  border: 1px solid transparent;
  background-color: transparent;

  ${({ warning }) => warning && css`
    color: #ab7b0b;
    border-color: #FFEE93;
    background-color: #FBF8E7;
  `}
`;

export default Message;