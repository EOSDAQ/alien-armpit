import styled from 'styled-components';
import { colors } from '../../common/css/theme';

const orderBookFooterHeight = 42;
const orderBookFooterContentsHeight = 23;
const orderBookFooterVerticalPadding = (orderBookFooterHeight - orderBookFooterContentsHeight) / 2;
export const OrderBookFooterCell = styled('div')`
  flex: 1;  
  background-color: ${colors.grey140};
  height: ${orderBookFooterHeight}px;
  padding: ${orderBookFooterVerticalPadding}px 0;
  text-align: center;
  font-size: 14px;
  color: ${colors.black650};
  font-weight: 500;
  align-items: center;
  flex-basis: 33.33%;

  div {
    width: 100%;
    height: ${orderBookFooterContentsHeight}px;
    line-height: ${orderBookFooterContentsHeight}px;
    border-left: 1px solid ${colors.black220};
    border-right: 1px solid ${colors.black220}; 
    padding: 0 12px;

  }
`;

export const OrderBookFooterCellLeft = styled(OrderBookFooterCell)`
  text-align: right;

  div {
    border: 0;  
  }
`;

export const OrderBookFooterCellRight = styled(OrderBookFooterCellLeft)`
  text-align: left;
`;
