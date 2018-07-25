import React from 'react';
import {
  ExchangeChartWrap,
} from './ExchangeChart.styled';
import TradingView from './tradingView/TradingView';
import ExchangeChartHeader from './ExchangeChartHeader';

const ExchangeChartBox = () => (
  <ExchangeChartWrap>
    <ExchangeChartHeader />
    <TradingView />
  </ExchangeChartWrap>
);

export default ExchangeChartBox;
