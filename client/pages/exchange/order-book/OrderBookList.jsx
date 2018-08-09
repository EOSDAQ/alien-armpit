import React from 'react';
import {
  OrderBookListWrapper,
} from './OrderBookList.styled';
import OrderBookRow from './OrderBookRow';

const OrderBookList = (props) => {
  const {
    orderList,
    maxQuotes,
    isUpside,
  } = props;

  return (
    <OrderBookListWrapper>
      {
        orderList.map((orderBunch) => (
          <OrderBookRow
            key={orderBunch.price} // eslint-disable-line
            orderBunch={orderBunch}
            maxQuotes={maxQuotes}
            isUpside={isUpside}
          />
        ))
      }
    </OrderBookListWrapper>
  );
};

export default OrderBookList;
