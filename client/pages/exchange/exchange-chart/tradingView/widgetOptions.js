import { colors } from 'components/css/theme';
import { staticPath } from 'constants/constants';

const widgetOptions = {
  // debug: true,
  symbol: 'AAPL',
  width: '100%',
  height: 411,
  interval: 'D',
  locale: 'ko',  
  container_id: 'tv_chart_container',
  datafeed: new window.Datafeeds.UDFCompatibleDatafeed('https://demo_feed.tradingview.com'),
  library_path: `${staticPath.root}/lib/trading-view/charting_library/`,
  chartsStorageUrl: 'https://saveload.tradingview.com',
  chartsStorageApiVersion: '1.1',
  client_id: 'tradingview.com',
  user_id: 'public_user_id',
  autosize: true,
  disabled_features: [
    'use_localstorage_for_settings',
    'header_widget',
    'header_symbol_search',
    'header_symbol_search_hot_key',
    'header_undo_redo',
    'header_compare',
    'symbol_search_hot_key',
    'volume_force_overlay',
    'display_market_status',
    'remove_library_container_border',
  ],
  enabled_features: [
    'keep_left_toolbar_visible_on_small_screens',
    'hide_last_na_study_output',
    'dont_show_boolean_study_arguments',
  ],
  time_frames: [{
    text: '1m',
    resolution: 'D',
    description: '1달',
  }, {
    text: '1w',
    resolution: 'D',
    description: '1년',
  }, {
    text: '6m',
    resolution: 'D',
    description: '6개월',
  }, {
    text: '3m',
    resolution: '360',
    description: '3개월',
  }, {
    text: '1m',
    resolution: '60',
    description: '1개월',
  }, {
    text: '1w',
    resolution: '30',
    description: '1주',
  }, {
    text: '1d',
    resolution: '10',
    description: '1일',
  }],
  studies_overrides: {
    'volume.volume.color.0': colors.red500,
    'volume.volume.color.1': colors.blue500,
    'volume.volume.transparency': 70,
    // 이동 평균선(Moving Average)
    'volume.volume ma.plottype': 'line',
    'volume.volume ma.color': colors.red500, // TODO 색상 정의 필요
    'volume.volume ma.transparency': 100,
    'volume.volume ma.linewidth': 2,
    'volume.show ma': true,
    'volume.MA length': 15,
  },
  overrides: {
    'paneProperties.legendProperties.showSeriesTitle': false,
    'symbolWatermarkProperties.color': 'rgba(0, 0, 0, 0.00)',
    'symbolWatermarkProperties.transparency': 99,
    'mainSeriesProperties.style': 1,
    // Candle Styles
    'mainSeriesProperties.candleStyle.upColor': colors.red500,
    'mainSeriesProperties.candleStyle.downColor': colors.blue500,
    'mainSeriesProperties.candleStyle.borderColor': colors.grey500,
    'mainSeriesProperties.candleStyle.borderUpColor': colors.red500,
    'mainSeriesProperties.candleStyle.borderDownColor': colors.blue500,
    'mainSeriesProperties.candleStyle.wickUpColor': colors.red300,
    'mainSeriesProperties.candleStyle.wickDownColor': colors.blue300,
    'mainSeriesProperties.candleStyle.barColorsOnPrevClose': true,
    // Hollow Candle Styles
    'mainSeriesProperties.hollowCandleStyle.upColor': colors.red500,
    'mainSeriesProperties.hollowCandleStyle.downColor': colors.blue500,
    'mainSeriesProperties.hollowCandleStyle.drawWick': true,
    'mainSeriesProperties.hollowCandleStyle.drawBorder': true,
    'mainSeriesProperties.hollowCandleStyle.borderUpColor': colors.red500,
    'mainSeriesProperties.hollowCandleStyle.borderDownColor': colors.blue500,
    'mainSeriesProperties.hollowCandleStyle.wickUpColor': colors.red500,
    'mainSeriesProperties.hollowCandleStyle.wickDownColor': colors.blue500,
    // Heikin Ashi Styles
    'mainSeriesProperties.haStyle.upColor': colors.red500,
    'mainSeriesProperties.haStyle.downColor': colors.blue500,
    'mainSeriesProperties.haStyle.borderUpColor': colors.red500,
    'mainSeriesProperties.haStyle.borderDownColor': colors.blue500,
    'mainSeriesProperties.haStyle.wickUpColor': colors.red500,
    'mainSeriesProperties.haStyle.wickDownColor': colors.red500,
    'mainSeriesProperties.haStyle.barColorsOnPrevClose': true,
    // Bar Styles
    'mainSeriesProperties.barStyle.upColor': colors.red500,
    'mainSeriesProperties.barStyle.downColor': colors.blue500,
    // Baseline Style
    'mainSeriesProperties.baselineStyle.topFillColor1': colors.red300,
    'mainSeriesProperties.baselineStyle.topFillColor2': colors.red300,
    'mainSeriesProperties.baselineStyle.bottomFillColor1': colors.blue300,
    'mainSeriesProperties.baselineStyle.bottomFillColor2': colors.blue300,
    'mainSeriesProperties.baselineStyle.topLineColor': colors.red500,
    'mainSeriesProperties.baselineStyle.bottomLineColor': colors.blue500,
  },
};

export default widgetOptions;
