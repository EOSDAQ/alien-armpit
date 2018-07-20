import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../../css/theme';

export const TickersTab = styled.div`
  cursor: pointer;
  padding: 0 20px;
  font-size: 14px;

  &:hover {
    background: #fafafa;
  }

  &[role=current]:focus {
    outline: 0;
  }
`;
