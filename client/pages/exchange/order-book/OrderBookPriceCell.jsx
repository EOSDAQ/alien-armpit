import React from 'react';
import {
  OrderBookPrice,
  OrderBookAskingPrice,
  OrderBookChange,
} from './OrderBookPriceCell.styled';
import { toFixed } from 'utils/format';
import { Number } from 'components/atom/Text';

const OrderBookPriceCell = (props) => {
  const {
    price,
    change,
    isUpside,
  } = props;

  const dayChange = change > 0;

  return (
    <OrderBookPrice
      isUpside={isUpside}
      dayChange={dayChange}
    >
      <OrderBookAskingPrice>
        <Number>
          {toFixed(4, price.toLocaleString())}
        </Number>
      </OrderBookAskingPrice>
      <OrderBookChange>
        <Number>
          {`${toFixed(2, change.toLocaleString())}%`}
        </Number>
      </OrderBookChange>
    </OrderBookPrice>
  );
};

export default OrderBookPriceCell;
