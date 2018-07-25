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

  const amountJsx = <OrderBookAmountCell key="orderBookAmount" amount={amount} maxAmount={maxAmount} isUpside={isUpside} />;
  const priceJsx = <OrderBookPriceCell key="orderBookPrice" price={price} change={change} isUpside={isUpside} />;

  return (
    <Flex
      height={40}
      borderBottom="1px solid #fff"
    >
      { isUpside
        ? [amountJsx, priceJsx]
        : [priceJsx, amountJsx]
      }
    </Flex>
  );
};

export default OrderBookRow;
