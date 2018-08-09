import styled from 'styled-components';
import { colors } from 'components/css/theme';
import {
  SheetRow,
} from 'components/molecules/Sheet';

export const OrderBookPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin: 1px 0;
  color: ${({ dayChange }) => dayChange ? colors.red500 : colors.blue500 };
  background-color: ${({ isUpside }) => (isUpside ? colors.blue120 : colors.red120)};
`;

export const OrderBookAskingPrice = styled('div')`
  flex: 1 1;
  font-size: 13px;
`;

export const OrderBookChange = styled('div')`
  flex: 0 0 auto;
  font-size: 12px;
`;
