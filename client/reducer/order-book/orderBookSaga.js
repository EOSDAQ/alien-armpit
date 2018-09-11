import { call, put } from 'redux-saga/effects';
import orderBookReducer from './orderBookReducer';
import * as api from 'api/orderBook';

export function* fetchOrderBook({ payload, next }) {
  try {
    const { data, error } = yield call(api.loadOrderBook, payload);
    
    if (error) {
      return;
    }

    yield put(orderBookReducer.actions.updateOrderBook({
      data,
      ...payload,
    }));

    yield next({ error });
  } catch (e) {
    console.error(e);
  }
}
