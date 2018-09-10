import { all, takeLatest } from 'redux-saga/effects';
import { types as signinTypes } from './signin/signinReducer';
import * as orderBookSaga from './order-book/orderBookSaga';
import orderBookReducer from './order-book/orderBookReducer';
import * as signinSaga from './signin/signinSaga';
import otpSaga from './otp/otpSaga';
import tickersSaga from './tickers/tickersSaga';
import accountSaga from './account/accountSaga';
import orderLogSaga from './order-log/orderLogSaga';

export default function* saga() {
  yield all([
    ...accountSaga,
    ...tickersSaga,
    ...otpSaga,
    ...orderLogSaga,
    takeLatest(
      orderBookReducer.types.FETCH_ORDER_BOOK,
      orderBookSaga.fetchOrderBook,
    ),
    takeLatest(signinTypes.SEND_CONFIRM_EMAIL_SAGA, signinSaga.signin),
  ]);
}
