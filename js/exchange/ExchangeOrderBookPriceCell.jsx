import React from 'react';
import {
  ExchangeOrderBookPrice,
  ExchangeOrderBookAskingPrice,
  ExchangeOrderBookChange,
} from './Exchange.styled';

const ExchangeOrderBookPriceCell = (props) => {
  const {
    price,
    change,
    isUpside,
  } = props;

  return (
    <ExchangeOrderBookPrice isUpside={isUpside}>
      <ExchangeOrderBookAskingPrice>
        {price.toLocaleString()}
      </ExchangeOrderBookAskingPrice>
      <ExchangeOrderBookChange>
        {`${change.toLocaleString()}%`}
      </ExchangeOrderBookChange>
    </ExchangeOrderBookPrice>
  );
};

export default ExchangeOrderBookPriceCell;
