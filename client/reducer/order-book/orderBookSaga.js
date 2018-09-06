import { call, put } from 'redux-saga/effects';
import orderBookReducer from './orderBookReducer';
import * as api from 'api/orderBook';
import * as apiReducer from '../api/apiReducer';

export function* fetchOrderBook({ payload }) {
  try {
    yield put(apiReducer.actions.fetchQuery(payload));
    const { data, error } = yield call(api.loadOrderBook, payload);

    if (error) {
      return;
    }

    yield put(orderBookReducer.actions.updateOrderBook({
      data,
      ...payload,
    }));

    yield put(apiReducer.actions.updateQuery(payload));
  } catch (e) {
    console.error(e);
  }
}
