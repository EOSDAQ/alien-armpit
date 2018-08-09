import React from 'react';
import {
  OrderBookAmount,
  OrderBookAmountNum,
  OrderBookAmountBar,
} from './OrderBookAmountCell.styled';
import { Number } from 'components/atom/Text';
import { toFixed } from 'utils/format';

const OrderBookAmountCell = (props) => {
  const {
    amount,
    maxAmount,
    isUpside,
  } = props;
  return (
    <OrderBookAmount isUpside={isUpside}>
      <OrderBookAmountNum isUpside={isUpside}>
        <Number>
          {toFixed(4, amount.toLocaleString())}
        </Number>
      </OrderBookAmountNum>
      <OrderBookAmountBar
        isUpside={isUpside}
        width={amount / maxAmount * 100}
      />
    </OrderBookAmount>
  );
};

export default OrderBookAmountCell;
