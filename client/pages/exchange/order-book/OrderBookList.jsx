import React from 'react';
import {
  OrderBookListWrapper,
} from './OrderBookList.styled';
import OrderBookRow from './OrderBookRow';
import { SheetRow } from 'components/molecules/Sheet';

const OrderBookList = (props) => {
  const {
    orderList,
    maxQuotes,
    isUpside,
  } = props;

  return (
    <OrderBookListWrapper>
      {
        orderList.map((orderBunch, i) => orderBunch ? (
          <OrderBookRow
            key={orderBunch.price + orderBunch.type}
            orderBunch={orderBunch}
            maxQuotes={maxQuotes}
            isUpside={isUpside}
          />
        ) : <SheetRow columns="1fr 1fr" key={i} />)
      }
    </OrderBookListWrapper>
  );
};

export default OrderBookList;
