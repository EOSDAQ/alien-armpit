import React from 'react';
import Flex from 'components/atom/Flex';
import {
  OrderBookFooterCell,
  OrderBookFooterCellLeft,
  OrderBookFooterCellRight,
} from './OrderBookFooter.styled';

const OrderBookFooter = () => {
  return (
    <Flex>
      <OrderBookFooterCellLeft>
        <div>
          13,484,601.541
        </div>
      </OrderBookFooterCellLeft>
      <OrderBookFooterCell>
        <div>
          총 잔량
        </div>
      </OrderBookFooterCell>
      <OrderBookFooterCellRight>
        <div>
          13,484,601.541
        </div>
      </OrderBookFooterCellRight>
    </Flex>
  );
};

export default OrderBookFooter;
