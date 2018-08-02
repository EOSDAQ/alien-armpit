import React from 'react';
import styled from 'styled-components';
import { colors } from '../../css/theme';

export const TickersRow = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 36px minmax(140px, 1fr) 80px 80px 80px;
  grid-template-rows: 40px;

  &:nth-child(even) {
    background: ${colors.grey50};
  }
`;

export const TickersCell = styled.div`
  align-self: center;
`;
