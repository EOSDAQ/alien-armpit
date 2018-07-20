import styled from 'react-emotion';
import {
  SheetRow,
} from '../../common/components/molecules/Sheet';
import theme, { colors } from '../../common/css/theme';

export const OrderBookAmount = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  ${({ isUpside }) => isUpside && `
    justify-content: flex-end;
  `}
`;

export const OrderBookAmountNum = styled('div')`
  position: absolute;
  top: 0;
  font-size: 12px;
  margin-top: -6px;
  top: 50%;
  font-family: ${theme.fontFamily.number};
  padding: ${({ isUpside }) => (isUpside ? '0 10px 0 0' : '0 0 0 10px')};
`;

export const OrderBookAmountBar = styled('div')`
  height: 80%;
  width: calc(${({ width }) => (width)}% - 10px);
  background-color: ${({ isUpside }) => (isUpside ? colors.blue100 : colors.red100)};
`;
