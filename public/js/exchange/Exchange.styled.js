import styled from 'styled-components';
import { Container } from 'common/components/atom/Box';
import {
  exchangeLeftWidth,
  exchangeRightWidth,
} from '../common/constants/styleConstants';

export const ExchangeBody = styled('div')`
  background-color: #fafafa;  
`;

export const ExchangeContainer = styled(Container)`
  display: flex;
  justify-content: center;
  margin: 16px auto;
`;

export const ExchangeLeftSide = styled('div')`
  width: ${exchangeLeftWidth}px;
  margin-right: 12px;
  flex: 0 0 auto;
`;

export const ExchangeRightSide = styled('div')`
  flex: 1 1;
  width: auto;
  position: relative;
`;

export const ExchangeRightBottom = styled('div')`
  display: flex;
  width: ${exchangeRightWidth}px;
  margin-top: 12px;
`;
