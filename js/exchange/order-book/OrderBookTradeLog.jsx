import React from 'react';
import {
  OrderBookTradeLogWrapper,
  OrderBookTradeLogRow,
  OrderBookTradeLogHeader,
  OrderBookTradeLogCell,
} from './OrderBookTradeLog.styled';

const OrderTradeLog = (props) => {
  const { tradeLogList } = props;
  return (
    <OrderBookTradeLogWrapper>
      <OrderBookTradeLogRow>
        <OrderBookTradeLogHeader>
          체결가
        </OrderBookTradeLogHeader>
        <OrderBookTradeLogHeader>
          체결량
        </OrderBookTradeLogHeader>
      </OrderBookTradeLogRow>
      { tradeLogList.map(log => (
        <OrderBookTradeLogRow>
          <OrderBookTradeLogCell>
            {log.price}
          </OrderBookTradeLogCell>
          <OrderBookTradeLogCell>
            {log.amount}
          </OrderBookTradeLogCell>
        </OrderBookTradeLogRow>
      ))}
    </OrderBookTradeLogWrapper>
  );
};

export default OrderTradeLog;
