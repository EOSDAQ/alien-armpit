import styled from 'styled-components';
import { Container } from 'common/components/atom/Box';
import {
  exchangeLeftWidth,
  exchangeRightWidth,
} from '../common/constants/styleConstants';

export const ExchangeBody = styled('div')`
  background-color: #fafafa;  
`;

export const ExchangeContainer = Container.extend`
  display: flex;
  padding-top: 16px;
  padding-bottom: 16px;
`;

export const ExchangeLeftSide = styled('div')`
  display: flex;
  width: ${exchangeLeftWidth}px;
  flex-direction: column;  
  margin-right: 12px;
  flex: 0 0 auto;
`;

export const ExchangeRightSide = styled('div')`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  width: ${exchangeRightWidth}px;
`;

export const ExchangeRightBottom = styled('div')`
  display: flex;
  width: ${exchangeRightWidth}px;
  margin-top: 12px;
`;
