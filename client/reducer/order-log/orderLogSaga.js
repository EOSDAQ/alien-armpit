import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { types, actions } from './orderLogReducer';
import { tiffany } from 'api/apis';
import { actions as apiActions } from '../api/apiReducer';

function* fetchTradeHistory({ payload }) {
  yield put(apiActions.fetchQuery(payload));

  const { symbol } = payload;
  const { data, error } = yield call(tiffany.get, `/symbol/${symbol}/tx`);

  if (data) {
    yield put(actions.updateTradeHistory({
      symbol,
      transactions: data,
    }));
  }

  yield put(apiActions.updateQuery(payload));
}

const orderLogSaga = [
  takeEvery(types.FETCH_TRADE_HISTORY, fetchTradeHistory),
];

export default orderLogSaga;