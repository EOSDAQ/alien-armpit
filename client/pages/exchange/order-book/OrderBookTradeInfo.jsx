import React from 'react';
import { translate } from 'react-i18next';
import {
  OrderBookTradeInfoWrapper,
  OrderBookTradeInfoAmountRow,
  OrderBookTradeInfoAmount,
  OrderBookTradeInfoUnit,
  OrderBookTradeInfoPriceRow,
  OrderBookTradeInfoPrice,
} from './OrderBookTradeInfo.styled';

const OrderBookTradeInfo = ({ t }) => (
  <OrderBookTradeInfoWrapper>
    <OrderBookTradeInfoAmountRow>
      <dt>
        {t('chart.24hVolume')}
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
        {t('chart.prevClosePrice')}
      </dt>
      <OrderBookTradeInfoPrice>
        { Number(205100).toLocaleString() }
      </OrderBookTradeInfoPrice>
    </OrderBookTradeInfoPriceRow>
    <OrderBookTradeInfoPriceRow>
      <dt>
        {t('chart.dayHigh')}
      </dt>
      <OrderBookTradeInfoPrice>
        { Number(205100).toLocaleString() }
      </OrderBookTradeInfoPrice>
    </OrderBookTradeInfoPriceRow>
    <OrderBookTradeInfoPriceRow>
      <dt>
        {t('chart.dayHigh')}
      </dt>
      <OrderBookTradeInfoPrice>
        { Number(192000).toLocaleString() }
      </OrderBookTradeInfoPrice>
    </OrderBookTradeInfoPriceRow>
  </OrderBookTradeInfoWrapper>
);

export default translate('exchange')(OrderBookTradeInfo);
