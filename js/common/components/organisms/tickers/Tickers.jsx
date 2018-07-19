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
      coins: _coins,
    } = this.props;

    const { searchValue } = this.state;

    let coins = _coins;
    if (searchValue) {
      coins = coins.filter((c) => {
        const match = new RegExp(searchValue, 'i').exec(c.coinName + c.coinCode);
        return match !== null; // use index value to sort.
      });
    }

    return (
      <SheetWrapper>
        <TickersSearch onSearch={value => this.onSearch(value)} />
        <TickersHeader
          tab={tab}
          updateTab={updateTab}
        />
        <div>
          <TickersSubHeader />
          <TickersBody coinList={coins} />
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
