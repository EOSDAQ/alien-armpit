import React from 'react';
import styled from 'styled-components';
import { colors } from '../css/theme';

export const Wrapper = styled('div')`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Content = styled('div')`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Code = styled('h1')`
  font-size: 48px;
  font-weight: 400;
  margin-bottom: 16px;
`;

export const Desc = styled('p')`
  font-size: 16px;
  color: ${colors.grey500};
`;