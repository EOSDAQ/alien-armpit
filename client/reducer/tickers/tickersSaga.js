import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, types } from './tickersReducer';
import { actions as tokensActions } from '../tokens/tokensReducer';
import * as api from 'api/tickers';

export function* loadCoins() {
  try {
    const tickers = yield call(api.loadCoins);
    yield put(actions.updateCoinList(tickers));
    yield put(tokensActions.updateTokens({
      tokens: tickers,
    }));
    yield put(actions.updateFilteredCoinList());
  } catch(err) {
    console.log(err);
  }
}

export function* toggleShowFavorites() {
  yield put(actions.toggleShowFavorites());
  yield put(actions.updateFilteredCoinList());
}

export function* updateSort({ payload }) {
  yield put(actions.updateSort(payload));
  yield put(actions.updateFilteredCoinList());
}

export function* updateSearchValue({ payload }) {
  yield put(actions.updateSearchValue(payload));
  yield put(actions.updateFilteredCoinList());
}

const tickersSaga = [
  takeLatest(types.UPDATE_SORT_SAGA, updateSort),
  takeLatest(types.UPDATE_SEARCH_VALUE_SAGA, updateSearchValue),
  takeLatest(types.TOGGLE_SHOW_FAVORITES_SAGA, toggleShowFavorites),
  takeLatest(types.LOAD_COINS, loadCoins),
];

export default tickersSaga;
