import React from 'react';
import Flex from 'components/atom/Flex';
import {
  OrderBookFooterCell,
  OrderBookFooterCellLeft,
  OrderBookFooterCellRight,
} from './OrderBookFooter.styled';
import { toFixed } from 'utils/format';

const OrderBookFooter = ({ totalAskQuotes, totalBidQuotes }) => {

  return (
    <Flex>
      <OrderBookFooterCellLeft>
        <div>
          {toFixed(4, totalAskQuotes)}
        </div>
      </OrderBookFooterCellLeft>
      <OrderBookFooterCell>
        <div>
          총 잔량
        </div>
      </OrderBookFooterCell>
      <OrderBookFooterCellRight>
        <div>
          {toFixed(4, totalBidQuotes)}
        </div>
      </OrderBookFooterCellRight>
    </Flex>
  );
};

export default OrderBookFooter;
