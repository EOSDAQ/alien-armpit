import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { actions } from '../../../reducer/tickers/tickersReducer';
import { scrollbarsOptions } from '../../constants/constants';
import {
  SheetWrapper,
  SheetHeader,
  SheetSearch,
  SheetRow,
} from '../molecules/Sheet';
import {
  FavoriateHeader,
  CoinNameHeader,
  CurrentPriceHeader,
  DayChangeHeader,
  DayVolumeHeader,
  FavoriateCell,
  CoinNameCell,
  CoinNameText,
  CoinCodeText,
  CurrentPriceCell,
  DayChangeCell,
  DayVolumeCell,
  DayVolumeUnitText,
} from './TickersBox.styled';
import TickersTab from './TickersTab';

const mockTabs = ['EOS', '보유코인'];

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

class TickersBox extends Component {
  render() {
    const {
      updateTab,
      tab,
    } = this.props;
    const scrollStyle = { style: { height: 306 } };
    const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);

    return (
      <SheetWrapper>
        <SheetHeader>
          {
            mockTabs.map(tabId => (
              <TickersTab
                key={tabId}
                isSelected={tab === tabId}
                handleClickTab={(newTabId) => { updateTab(newTabId); }}
                tabId={tabId}
              />
            ))
          }
        </SheetHeader>
        <div>
          <SheetRow>
            <FavoriateHeader />
            <CoinNameHeader>
              코인이름
            </CoinNameHeader>
            <CurrentPriceHeader>
              현재가
            </CurrentPriceHeader>
            <DayChangeHeader>
              전일대비
            </DayChangeHeader>
            <DayVolumeHeader>
              거래량
            </DayVolumeHeader>
          </SheetRow>
          <Scrollbars {...scrollOptions}>
            { mockCoinList.map((coin, index) => (
              <SheetRow key={coin.coinCode + index}>
                <FavoriateCell favoriate={coin.favoriate} />
                <CoinNameCell>
                  <CoinNameText>
                    {coin.coinName}
                  </CoinNameText>
                  <CoinCodeText>
                    {coin.coinCode}
                  </CoinCodeText>
                </CoinNameCell>
                <CurrentPriceCell>
                  {coin.currentPrice}
                </CurrentPriceCell>
                <DayChangeCell>
                  {coin.dayChange}%
                </DayChangeCell>
                <DayVolumeCell>
                  {coin.dayVolume}
                  <DayVolumeUnitText>
                    백만
                  </DayVolumeUnitText>
                </DayVolumeCell>
              </SheetRow>
            ))}
          </Scrollbars>
        </div>
      </SheetWrapper>
    );
  }
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
)(TickersBox);
