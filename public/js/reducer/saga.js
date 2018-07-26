import { takeLatest } from 'redux-saga/effects';
import { types as tickersTypes } from './tickers/tickersReducer';
import * as tickersSaga from './tickers/tickersSaga';

export default function* saga() {
  yield [
    takeLatest(tickersTypes.UPDATE_SORT_SAGA, tickersSaga.updateSort),
    takeLatest(tickersTypes.UPDATE_SEARCH_VALUE_SAGA, tickersSaga.updateSearchValue),
    takeLatest(tickersTypes.TOGGLE_SHOW_FAVORITES_SAGA, tickersSaga.toggleShowFavorites),
    takeLatest(tickersTypes.LOAD_COINS, tickersSaga.loadCoins),
  ];
}
