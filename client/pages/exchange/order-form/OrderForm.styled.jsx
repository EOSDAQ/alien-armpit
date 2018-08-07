import React from 'react';
import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const OrderFormDisabled = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, .6);
  color: ${colors.grey100};
  font-size: 14px;
`;
