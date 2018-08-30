import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

export const types = {
  UPDATE_SELECTED_TAB: 'tickers/selectedTab/UPDATE',
  LOAD_COINS: 'tickers/box/coinList/LOAD',
  UPDATE_COIN_LIST: 'tickers/box/coinList/UPDATE',
  UPDATE_FILTERED_COIN_LIST: 'tickers/box/filteredCoinList/UPDATE',
  UPDATE_SORT: 'tickers/box/sort/UPDATE',
  UPDATE_SORT_SAGA: 'tickers/box/sort/UPDATE_SAGA',
  UPDATE_SEARCH_VALUE: 'tickers/box/searchValue/UPDATE',
  UPDATE_SEARCH_VALUE_SAGA: 'tickers/box/searchValue/UPDATE_SAGA',
  TOGGLE_SHOW_FAVORITES: 'tickers/box/showFavorite/TOGGLE',
  TOGGLE_SHOW_FAVORITES_SAGA: 'tickers/box/showFavorite/TOGGLE_SAGA',
  TOGGLE_COIN_FAVORITE: 'tickers/box/coin/favorite',
};

export const actions = {
  updateSelectedTab: createAction(types.UPDATE_SELECTED_TAB),
  loadCoins: createAction(types.LOAD_COINS),
  updateCoinList: createAction(types.UPDATE_COIN_LIST),
  updateFilteredCoinList: createAction(types.UPDATE_FILTERED_COIN_LIST),
  updateSort: createAction(types.UPDATE_SORT),
  updateSortSaga: createAction(types.UPDATE_SORT_SAGA),
  updateSearchValue: createAction(types.UPDATE_SEARCH_VALUE),
  updateSearchValueSaga: createAction(types.UPDATE_SEARCH_VALUE_SAGA),
  toggleShowFavorites: createAction(types.TOGGLE_SHOW_FAVORITES),
  toggleShowFavoritesSaga: createAction(types.TOGGLE_SHOW_FAVORITES_SAGA),
  toggleCoinFavorite: createAction(types.TOGGLE_COIN_FAVORITE),
};

const defaultState = {
  selectedTab: 'EOS',
  box: {
    sort: {
      field: 'dayVolume',
      order: -1,
    },
    searchValue: '',
    showFavorites: false,
  },
};

const selectedTab = handleActions({
  [types.UPDATE_SELECTED_TAB]: (state, { payload }) => (payload),
}, defaultState.selectedTab);

const box = handleActions({
  [types.UPDATE_COIN_LIST]: (state, { payload: { result } }) => ({
    ...state,
    tokens: result,
  }),
  [types.UPDATE_FILTERED_COIN_LIST]: (state) => {
    const {
      searchValue,
      showFavorites,
      sort,
      coinList,
    } = state;
    let coins = coinList.slice(0);

    if (searchValue) {
      coins = coins.filter((c) => {
        const code = c.coinCode ? c.coinCode.split('/')[0] : '';
        const match = new RegExp(searchValue, 'i').exec(c.coinName + code);
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

    return {
      ...state,
      filteredCoinList: coins,
    };
  },

  [types.UPDATE_SORT]: (state, { payload: { field } }) => {
    const oldSort = state.sort;
    return {
      ...state,
      sort: {
        field,
        order: oldSort.field === field
          ? -(oldSort.order) : defaultState.box.sort.order,
      },
    };
  },
  [types.UPDATE_SEARCH_VALUE]: (state, { payload: { value } }) => ({
    ...state,
    searchValue: value,
  }),
  [types.TOGGLE_SHOW_FAVORITES]: state => ({
    ...state,
    showFavorites: !state.showFavorites,
  }),
}, defaultState.box);

export default combineReducers({
  selectedTab,
  box,
});
