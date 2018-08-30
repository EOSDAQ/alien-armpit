import React from 'react';
import { translate } from 'react-i18next';
import {
  ExchangeChartWrap,
} from './ExchangeChart.styled';
import TradingView from './tradingView/TradingView';
import ExchangeChartHeader from './ExchangeChartHeader';

class ExchangeChart extends React.Component {
  render() {
    const { code, i18n } = this.props;
    const { language } = i18n;

    return (
      <ExchangeChartWrap>
        <ExchangeChartHeader code={code} />
        <TradingView key={language} />
      </ExchangeChartWrap>
    );
  }
}

export default translate()(ExchangeChart);
