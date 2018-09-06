import { call, put, takeLatest } from 'redux-saga/effects';
import { actions, types } from './tickersReducer';
import { actions as tokensActions } from '../tokens/tokensReducer';
import { tiffany } from 'api/apis';

export function* loadCoins() {
  const { data, error } = yield call(tiffany.get, '/ticker');
  if (error) {
    return;
  }

  if (data) {
    const { Tickers: tickers } = data;

    const { result, tokens } = tickers.reduce((res, ticker) => {
      const pair = `${ticker.symbol}_${ticker.baseSymbol}`;
      res.result.push(pair);
      res.tokens[pair] = { 
        ...ticker, 
        pair,
        dayChange: (ticker.currentPrice - ticker.prevPrice) / Math.max(ticker.prevPrice, 1),
      };
      return res;
    }, { result: [], tokens: {} });

    yield put(actions.updateCoinList({ result }));
    yield put(tokensActions.updateTokens({ tokens }));
  }
}

export function* toggleShowFavorites() {
  yield put(actions.toggleShowFavorites());
  yield put(actions.updateFilteredCoinList());
}

export function* updateSearchValue({ payload }) {
  yield put(actions.updateSearchValue(payload));
  yield put(actions.updateFilteredCoinList());
}

const tickersSaga = [
  takeLatest(types.UPDATE_SEARCH_VALUE_SAGA, updateSearchValue),
  takeLatest(types.TOGGLE_SHOW_FAVORITES_SAGA, toggleShowFavorites),
  takeLatest(types.LOAD_COINS, loadCoins),
];

export default tickersSaga;
