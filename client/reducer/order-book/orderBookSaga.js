import { call, put } from 'redux-saga/effects';
import orderBookReducer from './orderBookReducer';
import * as api from './orderBookApi';

export function* fetchOrderBook() {
  try {
    const data = yield call(api.loadOrderBook);
    yield put(orderBookReducer.actions.updateOrderBook({ data }));
  } catch (e) {
    console.error(e);
  }
}
