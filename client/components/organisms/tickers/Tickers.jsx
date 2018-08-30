import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import { actions } from 'reducer/tickers/tickersReducer';

import { SheetWrapper } from '../../molecules/Sheet';
import TickersHeader from './TickersHeader';
import TickersSubHeader from './TickersSubHeader';
import TickersBody from './TickersBody';
import TickersSearch from './TickersSearch';

class Tickers extends React.Component {
  constructor(props) {
    super(props);
    this.debouncedHandleChange = debounce(this.debouncedHandleChange, 300);
  }

  componentDidMount() {
    const { loadCoins } = this.props;
    loadCoins();
  }

  handleChange(event) {
    this.debouncedHandleChange(event.value);
  }

  debouncedHandleChange(value) {
    const { updateSearchValue } = this.props;
    updateSearchValue(value);
  }

  filterTokens() {
    const { tokens, box } = this.props;
    const { searchValue, showFavorites, sort } = box;
    
    let filtered = [ ...tokens ];

    filtered = filtered.filter((c) => {
      if (searchValue) {
        const match = new RegExp(searchValue, 'i').exec(c.name + c.symbol);
        if (!match) return false;
      }

      if (showFavorites) {
        if (!c.favorite) return false;
      }

      return true;
    });

    const { field, order } = sort;

    filtered = filtered.sort((a, b) => {
      let compare;
      if (typeof a[field] === 'string') {
        compare = a[field].toUpperCase() > b[field].toUpperCase();
      } else {
        compare = a[field] > b[field];
      }
      return compare ? order : -order;
    });

    return filtered;
  }

  render() {
    const {
      selectedTab,
      box,
      updateSelectedTab,
      toggleShowFavorites,
    } = this.props;

    const {
      showFavorites,
    } = box;

    const tokens = this.filterTokens();

    return (
      <SheetWrapper>
        <TickersSearch
          onSearch={value => this.debouncedHandleChange(value)}
          showFavorites={showFavorites}
          toggleShowFavorites={() => toggleShowFavorites()}
        />
        <TickersHeader
          selectedTab={selectedTab}
          updateSelectedTab={updateSelectedTab}
        />
        <TickersSubHeader />
        <TickersBody tokens={tokens} />
      </SheetWrapper>
    );
  }
}

const mapStateToProps = state => {
  const { box } = state.tickers;
  const tokens = box.tokens && box.tokens
    .map(pair => state.tokens[pair])
    .filter(Boolean);

  return {
    ...state.tickers,
    tokens: tokens || [],
  }
};

const mapDispatchToProps = dispatch => ({
  updateSelectedTab: (tabId) => { dispatch(actions.updateSelectedTab(tabId)); },
  loadCoins: () => { dispatch(actions.loadCoins()); },
  updateSearchValue: (value) => { dispatch(actions.updateSearchValue({ value })); },
  toggleShowFavorites: () => { dispatch(actions.toggleShowFavorites()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tickers);
