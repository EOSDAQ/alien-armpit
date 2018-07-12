import React from 'react';
import Flex from '../../common/components/atom/Flex';
import OrderBookAmountCell from './OrderBookAmountCell';
import OrderBookPriceCell from './OrderBookPriceCell';

const OrderBookRow = ({ orderBunch, maxAmount, isUpside}) => {
  const {
    amount,
    price,
    change,
  } = orderBunch;

  const amountJsx = <OrderBookAmountCell amount={amount} maxAmount={maxAmount} isUpside={isUpside} />;
  const priceJsx = <OrderBookPriceCell price={price} change={change} isUpside={isUpside} />;

  return (
    <Flex borderBottom="1px solid #fff" lineHeight="32px">
      { isUpside
        ? [amountJsx, priceJsx]
        : [priceJsx, amountJsx]
      }
    </Flex>
  );
};

export default OrderBookRow;
