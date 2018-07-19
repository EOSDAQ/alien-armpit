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
import TickersSearch from './TickersSearch';

const mockCoinList = [
  {
    favoriate: true,
    coinName: 'Everipedia',
    coinCode: 'IQ/EOS',
    currentPrice: 0.0039,
    dayChange: 0.005,
    dayVolume: 73858000000,
  },
  {
    favoriate: true,
    coinName: 'EOX',
    coinCode: 'EOX/EOS',
    currentPrice: 0.0152,
    dayChange: 1.21,
    dayVolume: 36407000000,
  },
  {
    favoriate: false,
    coinName: 'eosDAC',
    coinCode: 'eosDAC/EOS',
    currentPrice: 0.0034,
    dayChange: -2.84,
    dayVolume: 35292000000,
  },
  {
    favoriate: true,
    coinName: 'EON',
    coinCode: 'EON/EOS',
    currentPrice: 0.2210,
    dayChange: 0.15,
    dayVolume: 12904000000,
  },
  {
    favoriate: false,
    coinName: 'CETOS',
    coinCode: 'CETI/EOS',
    currentPrice: 0.4480,
    dayChange: 0.22,
    dayVolume: 11900000000,
  },
];

class Tickers extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
    };
  }

  onSearch(value) {
    this.setState({
      searchValue: value,
    });
  }

  render() {
    const {
      updateTab,
      tab,
    } = this.props;

    const { searchValue } = this.state;
    let coinList = mockCoinList;

    if (searchValue) {
      coinList = mockCoinList.filter((c) => {
        const match = new RegExp(searchValue, 'i').exec(c.coinName + c.coinCode);
        return match !== null; // use index value to sort.
      });
    }

    return (
      <SheetWrapper>
        <TickersSearch onSearch={(value) => this.onSearch(value)} />
        <TickersHeader
          tab={tab}
          updateTab={updateTab}
        />
        <div>
          <TickersSubHeader />
          <TickersBody coinList={coinList} />
        </div>
      </SheetWrapper>
    );
  }
}

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
