import {
  call, put, select, takeEvery,
} from 'redux-saga/effects';
import { types, actions } from './orderLogReducer';
import { tiffany, proxy } from 'api/apis';
import * as scatterApi from 'api/scatter';

function* fetchTradeHistory({ payload, next }) {

  const { symbol } = payload;
  const { data, error } = yield call(tiffany.get, `/symbol/${symbol}/tx`);

  if (data) {
    yield put(actions.updateTradeHistory({
      symbol,
      transactions: data,
    }));
  }

  yield next();
}

function* fetchOpenOrders({ payload, next }) {
  const { accountName } = yield select(state => state.account.viewer);
  const { symbol } = payload;
  const { data, error } = yield call(proxy.get, `/symbol/${symbol}/user/${accountName}/orderbook`);
  if (data) {
    yield put(actions.updateOpenOrders({
      symbol,
      orders: data,
    }));
  }

  yield next();
}

function* fetchCloseOrders({ payload, next }) {
  const { accountName } = yield select(state => state.account.viewer);
  const { symbol } = payload;
  const { data, error } = yield call(proxy.get, `/symbol/${symbol}/user/${accountName}/tx`);
  if (data) {
    yield put(actions.updateCloseOrders({
      symbol,
      orders: data,
    }));
  }

  yield next();
}

function* cancelOrder({ payload }) {
  const { id, type, pair } = payload;

  const { accountName } = yield select(state => state.account.viewer);
  const { contractAccount, account } = yield select(state => state.tokens[pair]);

  yield call(scatterApi.cancelOrder, { id, type, contractAccount, account, accountName });
}

const orderLogSaga = [
  takeEvery(types.FETCH_TRADE_HISTORY, fetchTradeHistory),
  takeEvery(types.FETCH_OPEN_ORDERS, fetchOpenOrders),
  takeEvery(types.FETCH_CLOSE_ORDERS, fetchCloseOrders),
  takeEvery(types.CANCEL_ORDER, cancelOrder),
];

export default orderLogSaga;