import React from 'react';
import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';
import { Link } from '@reach/router';

export const ViewerIdenticon = styled('div')`
  border-radius: 999rem;
  overflow: hidden;
  width: 30px;
  height: 30px;
  border: 1px solid rgba(200, 200, 200, 0.25);
`;

export const ViewerName = styled.div`
  font-size: 13px;
  font-family: ${theme.fontFamily.mono};
  color: ${colors.white};
  margin-right: 4px;
`;

export const AuthLink = styled(Link)`
  font-size: 13px;
  padding: 0 10px;
  letter-spacing: .4px;
`;