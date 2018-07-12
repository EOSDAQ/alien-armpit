import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../../../reducer/tickers/tickersReducer';

import {
  SheetWrapper,
  // SheetSearch,
} from '../../molecules/Sheet';
import TickersHeader from './TickersHeader';
import TickersSubHeader from './TickersSubHeader';
import TickersBody from './TickersBody';

const mockCoinList = [
  {
    favoriate: true,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: true,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: true,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: true,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: true,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: true,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
  {
    favoriate: false,
    coinName: '이오스닥닥',
    coinCode: 'DAQ/EOS',
    currentPrice: 0.00232408,
    dayChange: -5.13,
    dayVolume: 12904233,
  },
];

const Tickers = (props) => {
  const {
    updateTab,
    tab,
  } = props;

  return (
    <SheetWrapper>
      <TickersHeader
        tab={tab}
        updateTab={updateTab}
      />
      <div>
        <TickersSubHeader />
        <TickersBody coinList={mockCoinList} />
      </div>
    </SheetWrapper>
  );
};

const mapStateToProps = state => ({
  ...state.tickers,
});

const mapDispatchToProps = dispatch => ({
  updateTab: (tabId) => { dispatch(actions.updateTab(tabId)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tickers);
