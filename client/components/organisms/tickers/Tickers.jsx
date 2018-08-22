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

  render() {
    const {
      selectedTab,
      box,
      updateSelectedTab,
      toggleShowFavorites,
    } = this.props;
    const {
      filteredCoinList,
      showFavorites,
    } = box;

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
        <TickersBody coinList={filteredCoinList} />
      </SheetWrapper>
    );
  }
}

const mapStateToProps = state => ({
  ...state.tickers,
});

const mapDispatchToProps = dispatch => ({
  updateSelectedTab: (tabId) => { dispatch(actions.updateSelectedTab(tabId)); },
  loadCoins: () => { dispatch(actions.loadCoins()); },
  updateSearchValue: (value) => { dispatch(actions.updateSearchValueSaga(value)); },
  toggleShowFavorites: () => { dispatch(actions.toggleShowFavoritesSaga()); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tickers);
