import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../../css/theme';

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${colors.grey900};
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const WhyLabel = styled.div`
  font-size: 14px;
  margin-bottom: 1em;
  color: ${colors.grey600};
`;

export const Description = styled.div`
  line-height: 21px;
  font-size: 14px;
  color: ${colors.grey700};
  margin-bottom: 56px;
`;