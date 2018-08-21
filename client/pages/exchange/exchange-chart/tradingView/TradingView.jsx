import React from 'react';
import widgetOptions from './widgetOptions';
import { translate } from 'react-i18next';
import { timezone } from 'constants/constants';
// import { colors } from 'components/css/theme';

class TradingViewWidget extends React.Component {
  componentDidMount() {
    const { i18n } = this.props;
    const { language } = i18n;
    const options = Object.assign({}, widgetOptions, {
      locale: language,
      timezone: timezone[language],
    });

    const widget = new window.TradingView.widget(options);
    widget.onChartReady(() => {
      const chart = widget.chart();
      chart.createStudy('Moving Average', true, true, [15], null, {
        'Plot.color': '#00ff00',
        'Plot.linewidth': 1,
      });
      chart.createStudy('Moving Average', true, true, [50], null, {
        'Plot.color': '#770077',
        'Plot.linewidth': 1,
      });
    });
  }

  render() {
    return (
      <div
        id={widgetOptions.container_id}
        style={{
          flex: '1 1',
          overflow: 'hidden',
        }}
      />
    );
  }
}

export default translate('common')(TradingViewWidget);
