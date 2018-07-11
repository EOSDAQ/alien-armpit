import React from 'react';
import {
  ExchangeOrderBookAmount,
  ExchangeOrderBookAmountNum,
  ExchangeOrderBookAmountBar,
} from './Exchange.styled';

const ExchangeOrderBookAmountCell = (props) => {
  const {
    amount,
    maxAmount,
    isUpside,
  } = props;
  return (
    <ExchangeOrderBookAmount isUpside={isUpside}>
      <ExchangeOrderBookAmountNum isUpside={isUpside}>
        {amount.toLocaleString()}
      </ExchangeOrderBookAmountNum>
      <ExchangeOrderBookAmountBar
        isUpside={isUpside}
        width={amount / maxAmount * 100}
      />
    </ExchangeOrderBookAmount>
  );
};

export default ExchangeOrderBookAmountCell;
