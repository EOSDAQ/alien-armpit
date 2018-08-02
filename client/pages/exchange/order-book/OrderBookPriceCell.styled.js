import styled from 'styled-components';
import { colors } from 'components/css/theme';
import {
  SheetRow,
} from 'components/molecules/Sheet';

export const OrderBookPrice = styled(SheetRow)`
  flex: 1;  
  background-color: ${({ isUpside }) => (isUpside ? colors.blue120 : colors.red120)};
  font-size: 12px;  
`;

export const OrderBookAskingPrice = styled('span')`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  padding: 0 10px;
  font-weight: 700;
`;

export const OrderBookChange = styled('span')`
  display: flex;
  width: 30%;
  padding-right: 10px;
  justify-content: flex-end;
`;
