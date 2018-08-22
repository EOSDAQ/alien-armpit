import React from 'react';
import { translate } from 'react-i18next';
import {
  ExchangeChartWrap,
} from './ExchangeChart.styled';
import TradingView from './tradingView/TradingView';
import ExchangeChartHeader from './ExchangeChartHeader';

class ExchangeChart extends React.Component {
  constructor(props) {
    super(props);
    const { i18n } = props;
    this.state = {
      tradingViewKey: new Date().getTime(),
      language: i18n.language,
    };
  }

  shouldComponentUpdate() {
    const { i18n } = this.props;
    const { language } = i18n;
    const { language: prevLanguage } = this.state;

    if (!language || !prevLanguage) {
      return false;
    }

    if (language !== prevLanguage) {
      this.setState({
        language,
        tradingViewKey: new Date().getTime(),
      });
      return true;
    }
    return false;
  }

  render() {
    const { tradingViewKey } = this.state;
    return (
      <ExchangeChartWrap>
        <ExchangeChartHeader />
        <TradingView key={tradingViewKey} />
      </ExchangeChartWrap>
    );
  }
}

export default translate()(ExchangeChart);
