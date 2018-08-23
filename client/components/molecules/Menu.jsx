import React from 'react';
import styled from 'styled-components';
import { colors } from '../css/theme';

const Menu = styled('div')`
  padding: 16px;
  padding-top: 32px;
  background: #fff;
  width: 240px;
`;

export const MenuItem = styled('div')`
  padding: 1rem;
  margin: 0 -1rem;
  width: 100%;
  color: ${colors.grey600};
  border-bottom: ${colors.grey200};

  &:hover {
    color: ${colors.primary500};
  }
`;

export default Menu;