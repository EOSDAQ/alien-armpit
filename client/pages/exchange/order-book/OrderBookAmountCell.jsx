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
    maxQuotes,
    isUpside,
  } = props;

  return (
    <OrderBookAmount isUpside={isUpside}>
      <OrderBookAmountNum isUpside={isUpside}>
        <Number>
          {toFixed(4, amount).toLocaleString()}
        </Number>
      </OrderBookAmountNum>
      <OrderBookAmountBar
        isUpside={isUpside}
        style={{
          width: amount / maxQuotes * 100,
        }}
      />
    </OrderBookAmount>
  );
};

export default OrderBookAmountCell;
