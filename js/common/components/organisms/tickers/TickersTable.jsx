import React from 'react';
import styled from 'react-emotion';
import { colors } from '../../../css/theme';

export const TickersRow = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 36px minmax(140px, 1fr) 80px 80px 80px;
  border-bottom: 1px solid ${colors.grey180};
`;
