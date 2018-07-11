import React from 'react';
import {
  ExchangeOrderBookTradeInfoWrapper,
  OrderBookTradeInfoAmountRow,
  OrderBookTradeInfoAmount,
  OrderBookTradeInfoUnit,
  OrderBookTradeInfoPriceRow,
  OrderBookTradeInfoPrice,
} from './Exchange.styled';

const ExchangeOrderBookTradeInfo = () => {
  return (
    <ExchangeOrderBookTradeInfoWrapper>
      <OrderBookTradeInfoAmountRow>
        <dt>
          거래량(최근 24시간)
        </dt>
        <OrderBookTradeInfoAmount>
          { Number(30486112).toLocaleString() }
          <OrderBookTradeInfoUnit>
            DAQ
          </OrderBookTradeInfoUnit>
        </OrderBookTradeInfoAmount>
      </OrderBookTradeInfoAmountRow>
      <OrderBookTradeInfoPriceRow>
        <dt>
          전일 종가
        </dt>
        <OrderBookTradeInfoPrice>
          { Number(205100).toLocaleString() }
        </OrderBookTradeInfoPrice>
      </OrderBookTradeInfoPriceRow>
      <OrderBookTradeInfoPriceRow>
        <dt>
          당일 고가
        </dt>
        <OrderBookTradeInfoPrice>
          { Number(205100).toLocaleString() }
        </OrderBookTradeInfoPrice>
      </OrderBookTradeInfoPriceRow>
      <OrderBookTradeInfoPriceRow>
        <dt>
          당일 저가
        </dt>
        <OrderBookTradeInfoPrice>
          { Number(192000).toLocaleString() }
        </OrderBookTradeInfoPrice>
      </OrderBookTradeInfoPriceRow>
    </ExchangeOrderBookTradeInfoWrapper>
  );
};

export default ExchangeOrderBookTradeInfo;
