import styled from 'react-emotion';
import { colors } from '../common/css/theme';
import {
  exchangeLeftWidth,
  exchangeRightWidth,
} from '../common/constants/styleConstants';

export const ExchangeBody = styled('div')`
  background-color: #fafafa;  
`;

export const ExchangeContainer = styled('div')`
  display: flex;
  margin: 0 auto;
  width: 1280px;
  padding: 24px 0 42px;
`;

export const ExchangeLeftSide = styled('div')`
  display: flex;
  width: ${exchangeLeftWidth}px;
  flex-direction: column;  
  margin-right: 12px;
`;

export const ExchangeRightSide = styled('div')`
  display: flex;
  width: ${exchangeRightWidth}px;
`;

export const ExchangeRightBottom = styled('div')`
  display: flex;
  width: ${exchangeRightWidth}px;
  margin-top: 12px;
`;
