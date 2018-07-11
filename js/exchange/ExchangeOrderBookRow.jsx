import React from 'react';
import Flex from '../common/components/atom/Flex';
import ExchangeOrderBookAmountCell from './ExchangeOrderBookAmountCell';
import ExchangeOrderBookPriceCell from './ExchangeOrderBookPriceCell';

const ExchangeOrderBookRow = ({ orderBunch, maxAmount, isUpside}) => {
  const {
    amount,
    price,
    change,
  } = orderBunch;

  const amountJsx = <ExchangeOrderBookAmountCell amount={amount} maxAmount={maxAmount} isUpside={isUpside} />;
  const priceJsx = <ExchangeOrderBookPriceCell price={price} change={change} isUpside={isUpside} />;

  return (
    <Flex borderBottom="1px solid #fff" lineHeight="32px">
      { isUpside
        ? [amountJsx, priceJsx]
        : [priceJsx, amountJsx]
      }
    </Flex>
  );
};

export default ExchangeOrderBookRow;
