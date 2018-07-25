import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../css/theme';

export const TickersTab = styled.div`
  cursor: pointer;
  padding: 0 20px;
  font-size: 14px;
  min-width: 100px;
  text-align: center;

  &:hover {
    background: #fafafa;
  }

  &[role=current]:focus {
    outline: 0;
  }
`;
