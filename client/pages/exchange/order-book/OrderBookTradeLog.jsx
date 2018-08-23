import React from 'react';
import { translate } from 'react-i18next';
import {
  OrderBookTradeLogWrapper,
  OrderBookTradeLogRow,
  OrderBookTradeLogHeader,
  OrderBookTradeLogCell,
} from './OrderBookTradeLog.styled';

const OrderTradeLog = ({ tradeLogList, t }) => (
  <OrderBookTradeLogWrapper>
    <OrderBookTradeLogRow>
      <OrderBookTradeLogHeader>
        {t('orderLog.price')}
      </OrderBookTradeLogHeader>
      <OrderBookTradeLogHeader>
        {t('orderLog.volume')}
      </OrderBookTradeLogHeader>
    </OrderBookTradeLogRow>
    { tradeLogList.map(log => (
      <OrderBookTradeLogRow key={log.price + log.amount}>
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

export default translate('exchange')(OrderTradeLog);
