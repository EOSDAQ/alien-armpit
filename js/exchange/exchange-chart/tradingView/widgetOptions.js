import { colors } from '../../../common/css/theme';

const widgetOptions = {
  debug: true,
  symbol: 'AAPL',
  interval: 'D',
  locale: 'en',
  container_id: 'tv_chart_container',
  datafeed: new window.Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com'),
  library_path: '/charting_library/',
  chartsStorageUrl: 'https://saveload.tradingview.com',
  chartsStorageApiVersion: '1.1',
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  autosize: true,
  disabled_features: ['use_localstorage_for_settings'],
  enabled_features: ['study_templates'],
  studies_overrides: {},
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
};

export default widgetOptions;
