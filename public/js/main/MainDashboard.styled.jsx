import * as React from 'react';
import styled from 'styled-components';
import Text from '../common/components/atom/Text';
import theme from '../common/css/theme';

export const CoinImage = styled.img`
  width: 20px;
  height: 20px;
`;

export const CoinPriceChange = Text.extend`
  font-size: 10px;
  margin-right: 40px;
  color: rgba(255, 255, 255, .8);
  font-family: ${theme.fontFamily.mono};
`;
