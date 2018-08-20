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
        orderList.map((orderBunch) => orderBunch ? (
          <OrderBookRow
            key={orderBunch.price} // eslint-disable-line
            orderBunch={orderBunch}
            maxQuotes={maxQuotes}
            isUpside={isUpside}
          />
        ) : <SheetRow columns="1fr 1fr" />)
      }
    </OrderBookListWrapper>
  );
};

export default OrderBookList;
