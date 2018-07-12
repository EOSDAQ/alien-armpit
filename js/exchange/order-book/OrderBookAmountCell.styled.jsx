import styled from 'react-emotion';
import {
  SheetRow,
} from '../../common/components/molecules/Sheet';
import { colors } from '../../common/css/theme';

export const OrderBookAmount = styled(SheetRow)`
  position: relative;
  justify-content: ${({ isUpside }) => (isUpside ? 'flex-end' : '')};
  flex: 1;
`;

export const OrderBookAmountNum = styled('div')`
  position: absolute;
  top: 0;
  font-size: 12px;
  padding: ${({ isUpside }) => (isUpside ? '0 10px 0 0' : '0 0 0 10px')}
`;

export const OrderBookAmountBar = styled('div')`
  display: flex;
  height: 20px;
  width: calc(${({ width }) => (width)}% - 10px);
  background-color: ${({ isUpside }) => (isUpside ? colors.blue190 : colors.red130)};
  margin-top: 7px;
`;
