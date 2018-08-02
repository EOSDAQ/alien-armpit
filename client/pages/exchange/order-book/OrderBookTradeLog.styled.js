import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const OrderBookTradeLogWrapper = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const OrderBookTradeLogRow = styled('div')`
  display: flex;
`;

export const OrderBookTradeLogHeader = styled('div')`
  display: flex;
  height: 27px;
  flex: 1;
  flex-basis: 50%;
  text-align: center;
  font-size: 13px;
  color: ${colors.black650};
  background-color: ${colors.grey140};
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 0;

  &:first-child {
    border-left: 0;
  }
`;

export const OrderBookTradeLogCell = styled('div')`
  display: flex;
  flex: 1;
  flex-basis: 50%;
  height: 30px;
  text-align: right;
  font-size: 12px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);

  &:first-child {
    border-left: 0;
  }
`;
