import React from 'react';
import {
  OrderBookPrice,
  OrderBookAskingPrice,
  OrderBookChange,
} from './OrderBookPriceCell.styled';

const OrderBookPriceCell = (props) => {
  const {
    price,
    change,
    isUpside,
  } = props;

  return (
    <OrderBookPrice isUpside={isUpside}>
      <OrderBookAskingPrice>
        {price.toLocaleString()}
      </OrderBookAskingPrice>
      <OrderBookChange>
        {`${change.toLocaleString()}%`}
      </OrderBookChange>
    </OrderBookPrice>
  );
};

export default OrderBookPriceCell;
