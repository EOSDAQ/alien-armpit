import React from 'react';
import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';

export const ChartHeader = styled('div')`
  display: flex;
  align-items: flex-end;
  padding: 1rem;
  background: white;
`;

export const CoinInfo = styled('section')`
  margin-right: 40px;
`;

export const CoinLabel = styled('div')`
  color: ${colors.grey500};
  font-size: 12px;
  font-family: ${theme.fontFamily.mono};
`;

export const CoinName = styled('div')`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 4px;
  color: ${colors.grey900};
`;

export const CoinPriceSection = styled('section')`
  
`;

export const CoinPrice = styled('div')`
  font-size: 20px;
  font-weight: 500;
  color: ${colors.red500};
`;

export const CoinPriceLabel = styled('span')`
  font-size: 14px;
  color: ${colors.red500};
  font-family: ${theme.fontFamily.mono};
`;

export const CoinPriceChangeStat = styled('div')`
  background: ${colors.red100};
  font-size: 12px;
  padding: 4px;
`;

export const CoinStats = styled('div')`
  display: flex;
  justify-content: flex-end;
  flex: 1;
  font-size: 14px;
`;

export const CoinStat = styled('div')`
  display: flex;
  padding: 0 1rem;
  position: relative;

  &:not(:last-child):after {
    width: 1px;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background: #ddd;
    content: '';
  }

  &:last-child {
    padding-right: 0px;
  }
`;

export const CoinStatLabel = styled('div')`
  margin-right: 4px;
  font-size: 12px;
  color: ${colors.grey500};
`;

export const CoinStatValue = styled('div')`
  font-family: ${theme.fontFamily.number};
  font-size: 16px;
  color: ${({ type }) => {
    switch (type) {
      case 'high':
        return colors.red500;
      case 'low':
        return colors.blue500;
      default:
        return colors.grey800;
    }
  }};
`;
