import React from 'react';
import Flex from 'components/atom/Flex';
import OrderBookAmountCell from './OrderBookAmountCell';
import OrderBookPriceCell from './OrderBookPriceCell';
import { SheetRow } from 'components/molecules/Sheet';

const OrderBookRow = ({ orderBunch, maxAmount, isUpside}) => {
  const {
    amount,
    price,
    change,
  } = orderBunch;

  const amountJsx = <OrderBookAmountCell key="orderBookAmount" amount={amount} maxAmount={maxAmount} isUpside={isUpside} />;
  const priceJsx = <OrderBookPriceCell key="orderBookPrice" price={price} change={change} isUpside={isUpside} />;

  return (
    <SheetRow columns="1fr 1fr">
      { isUpside
        ? [amountJsx, priceJsx]
        : [priceJsx, amountJsx]
      }
    </SheetRow>
  );
};

export default OrderBookRow;
