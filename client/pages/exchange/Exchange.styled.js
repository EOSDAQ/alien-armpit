import styled from 'styled-components';
import { Container } from 'components/atom/Box';
import {
  exchangeLeftWidth,
  exchangeRightWidth,
} from 'pages/styleConstants';

export const ExchangeBody = styled('div')`
  background-color: #fff;  
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
