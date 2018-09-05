import * as React from 'react';
import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const HeaderStyled = styled('nav')`
  position: sticky;
  display: flex;
  align-items: center;
  top: 0;
  z-index: 10;
  height: 44px;
  min-height: 44px;
  background: #141a2a;
  color: ${colors.grey100};
`;

export const HeaderNavItem = styled.div`
  font-size: 13px;
  letter-spacing: .8px;
  font-weight: 300;
  margin-left: 50px;
  color: ${colors.grey300};
`;