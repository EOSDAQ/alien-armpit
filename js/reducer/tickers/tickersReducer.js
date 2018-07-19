import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

export const types = {
  UPDATE_TAB: 'tickers/tab/UPDATE',
  UPDATE_SORT: 'tickers/SORT',
  TOGGLE_FAVORITE: 'tickers/coin/TOGGLE_FAVORITE',
};

export const actions = {
  updateTab: createAction(types.UPDATE_TAB),
  updateSort: createAction(types.UPDATE_SORT),
  toggleFavorite: createAction(types.TOGGLE_FAVORITE),
};

const defaultState = {
  tab: 'EOS',
  sort: {
    field: 'dayVolume',
    order: -1,
  },
  coins: [
    {
      favorite: true,
      coinName: 'Everipedia',
      coinCode: 'IQ/EOS',
      currentPrice: 0.0039,
      dayChange: 0.005,
      dayVolume: 73858000000,
    },
    {
      favorite: true,
      coinName: 'EOX',
      coinCode: 'EOX/EOS',
      currentPrice: 0.0152,
      dayChange: 1.21,
      dayVolume: 36407000000,
    },
    {
      favorite: false,
      coinName: 'eosDAC',
      coinCode: 'eosDAC/EOS',
      currentPrice: 0.0034,
      dayChange: -2.84,
      dayVolume: 35292000000,
    },
    {
      favorite: true,
      coinName: 'EON',
      coinCode: 'EON/EOS',
      currentPrice: 0.2210,
      dayChange: 0.15,
      dayVolume: 12904000000,
    },
    {
      favorite: false,
      coinName: 'CETOS',
      coinCode: 'CETI/EOS',
      currentPrice: 0.4480,
      dayChange: 0.22,
      dayVolume: 11900000000,
    },
    {
      favorite: false,
      coinName: 'Ubuntu',
      coinCode: 'UBT/EOS',
      currentPrice: 0.9980,
      dayChange: -0.12,
      dayVolume: 11900000000,
    },
  ],
};

const tab = handleActions({
  [types.UPDATE_TAB]: (state, { payload }) => (payload),
}, defaultState.tab);

const sort = handleActions({
  [types.UPDATE_SORT]: (sortOption, { payload: { field } }) => ({
    field,
    order: sortOption.field === field ? -(sortOption.order) : defaultState.sort.order,
  }),
}, defaultState.sort);

const coins = handleActions({
  [types.TOGGLE_FAVORITE]: (_coins, { payload: { coinCode } }) => (
    _coins.map((c) => {
      if (c.coinCode !== coinCode) {
        return c;
      }
      return { ...c, favorite: !c.favorite };
    })
  ),
}, defaultState.coins);

export default combineReducers({
  tab,
  coins,
  sort,
});
