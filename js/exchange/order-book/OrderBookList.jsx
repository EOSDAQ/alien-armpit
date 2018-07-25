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
        orderList.map((orderBunch, index) => (
          <OrderBookRow
            key={maxAmount + index} // eslint-disable-line
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
