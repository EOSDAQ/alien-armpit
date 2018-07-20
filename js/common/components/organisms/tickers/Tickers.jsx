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

class Tickers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: null,
      showFavorites: false,
    };
  }

  onSearch(value) {
    this.setState({
      searchValue: value,
    });
  }
  
  onToggleFavorite() {
    const { showFavorites } = this.state;
    this.setState({
      showFavorites: !showFavorites,
    });
  }

  render() {
    const {
      updateTab,
      tab,
      sort,
      coins: _coins,
    } = this.props;

    const {
      searchValue,
      showFavorites,
    } = this.state;

    let coins = [..._coins];
    if (searchValue) {
      coins = coins.filter((c) => {
        const match = new RegExp(searchValue, 'i').exec(c.coinName + c.coinCode);
        return match !== null; // use index value to sort.
      });
    }

    if (showFavorites) {
      coins = coins.filter(c => c.favorite);
    }

    coins = coins.sort((a, b) => {
      const { field, order } = sort;
      let compare;
      if (typeof a[field] === 'string') {
        compare = a[field].toUpperCase() > b[field].toUpperCase();
      } else {
        compare = a[field] > b[field];
      }
      return compare ? order : -order;
    });

    return (
      <SheetWrapper>
        <TickersSearch
          onSearch={value => this.onSearch(value)}
          showFavorites={showFavorites}
          onToggleFavorite={() => this.onToggleFavorite()}
        />
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
