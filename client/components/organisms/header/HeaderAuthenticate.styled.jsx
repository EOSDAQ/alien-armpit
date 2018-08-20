import React from 'react';
import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';

export const ViewerIdenticon = styled.div`
  border-radius: 999rem;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  border: 1px solid rgba(104, 247, 250, 0.25);
  background-image: url(${({ src }) => src});
`;

export const ViewerName = styled.div`
  font-size: 13px;
  font-family: ${theme.fontFamily.mono};
  color: ${colors.white};
  margin-right: 4px;
`;
