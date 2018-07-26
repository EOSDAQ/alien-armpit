import React from 'react';
import {
  OrderBookAmount,
  OrderBookAmountNum,
  OrderBookAmountBar,
} from './OrderBookAmountCell.styled';

const OrderBookAmountCell = (props) => {
  const {
    amount,
    maxAmount,
    isUpside,
  } = props;
  return (
    <OrderBookAmount isUpside={isUpside}>
      <OrderBookAmountNum isUpside={isUpside}>
        {amount.toLocaleString()}
      </OrderBookAmountNum>
      <OrderBookAmountBar
        isUpside={isUpside}
        width={amount / maxAmount * 100}
      />
    </OrderBookAmount>
  );
};

export default OrderBookAmountCell;
