import { all, takeLatest } from 'redux-saga/effects';
import { types as signinTypes } from './signin/signinReducer';
import { types as otpTypes } from './otp/otpReducer';
import * as orderBookSaga from './order-book/orderBookSaga';
import orderBookReducer from './order-book/orderBookReducer';
import * as signinSaga from './signin/signinSaga';
import * as otpSaga from './otp/otpSaga';
import tickersSaga from './tickers/tickersSaga';
import accountSaga from './account/accountSaga';

export default function* saga() {
  yield all([
    ...accountSaga,
    ...tickersSaga,
    takeLatest(
      orderBookReducer.types.FETCH_ORDER_BOOK,
      orderBookSaga.fetchOrderBook,
    ),
    takeLatest(signinTypes.SEND_CONFIRM_EMAIL_SAGA, signinSaga.signin),

    takeLatest(otpTypes.INIT_OTP_SAGA, otpSaga.initOtp),
    takeLatest(otpTypes.VALIDATE_OTP_SAGA, otpSaga.validateOtp),
  ]);

}
