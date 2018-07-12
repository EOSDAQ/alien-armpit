import React from 'react';
import {
  OrderBookListWrapper,
} from './OrderBookList.styled';
import OrderBookRow from './OrderBookRow';

const OrderBookList = (props) => {
  const {
    orderList,
    maxAmount,
    isUpside,
  } = props;

  return (
    <OrderBookListWrapper>
      {
        orderList.map(orderBunch => (
          <OrderBookRow
            orderBunch={orderBunch}
            maxAmount={maxAmount}
            isUpside={isUpside}
          />
        ))
      }
    </OrderBookListWrapper>
  );
};

export default OrderBookList;
