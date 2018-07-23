import React from 'react';
import { colors } from '../../common/css/theme';

function getLanguageFromURL() {
  const regex = new RegExp('[\\?&]lang=([^&#]*)');
  const results = regex.exec(window.location.search);
  return results === null ? null : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

window.TradingView.onready(() => {
  console.log('hello?');
})

function injectScript(src) {
  let script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = src;
  document.body.getElementsByTagName('head')[0].appendChild(script);
}

class TradingView extends React.PureComponent {
  componentDidMount() {
    const widgetOptions = {
      symbol: this.props.symbol,
      // BEWARE: no trailing slash is expected in feed URL
      datafeed: new window.Datafeeds.UDFCompatibleDatafeed(this.props.datafeedUrl),
      interval: this.props.interval,
      container_id: this.props.containerId,
      library_path: this.props.libraryPath,

      locale: getLanguageFromURL() || 'en',
      disabled_features: ['use_localstorage_for_settings'],
      enabled_features: ['study_templates'],
      charts_storage_url: this.props.chartsStorageUrl,
      charts_storage_api_version: this.props.chartsStorageApiVersion,
      client_id: this.props.clientId,
      user_id: this.props.userId,
      fullscreen: this.props.fullscreen,
      autosize: this.props.autosize,
      overrides: {
        'mainSeriesProperties.candleStyle.upColor': colors.red500,
        'mainSeriesProperties.candleStyle.downColor': colors.blue500,
        'mainSeriesProperties.candleStyle.borderColor': colors.grey500,
        'mainSeriesProperties.candleStyle.borderUpColor': colors.red500,
        'mainSeriesProperties.candleStyle.borderDownColor': colors.blue500,
        'mainSeriesProperties.candleStyle.wickUpColor': colors.red300,
        'mainSeriesProperties.candleStyle.wickDownColor': colors.blue300,
        'mainSeriesProperties.barStyle.downColor': colors.blue500,
      },
      studies_overrides: this.props.studiesOverrides,
    };

    const widget = window.tvWidget = new window.TradingView.widget(widgetOptions);

    widget.onChartReady(() => {
      const button = widget.createButton()
        .attr('title', 'Click to show a notification popup')
        .addClass('apply-common-tooltip')
        .on('click', () => widget.showNoticeDialog({
          title: 'Notification',
          body: 'TradingView Charting Library API works correctly',
          callback: () => {
            console.log('Noticed!');
          },
        }));

      button[0].innerHTML = 'Check API';
    });
  }

  render() {
    return (
      <div
        id={this.props.containerId}
        style={{
          flex: '1 1',
        }}
      />
    );
  }
}

TradingView.defaultProps = {
  symbol: 'AAPL',
  interval: 'D',
  containerId: 'tv_chart_container',
  datafeedUrl: 'https://demo_feed.tradingview.com',
  libraryPath: '/charting_library/',
  chartsStorageUrl: 'https://saveload.tradingview.com',
  chartsStorageApiVersion: '1.1',
  clientId: 'tradingview.com',
  userId: 'public_user_id',
  fullscreen: false,
  autosize: true,
  studiesOverrides: {},
};

export default TradingView;
