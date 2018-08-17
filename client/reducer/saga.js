import { takeLatest } from 'redux-saga/effects';
import { types as tickersTypes } from './tickers/tickersReducer';
import { types as accountTypes } from './account/accountReducer';
import { types as signinTypes } from './signin/signinReducer';
import { types as otpTypes } from './otp/otpReducer';
import * as tickersSaga from './tickers/tickersSaga';
import * as accountSaga from './account/accountSaga';
import * as orderBookSaga from './order-book/orderBookSaga';
import orderBookReducer from './order-book/orderBookReducer';
import * as signinSaga from './signin/signinSaga';
import * as otpSaga from './otp/otpSaga';

export default function* saga() {
  yield [
    takeLatest(
      accountTypes.GET_SCATTER_IDENTITY,
      accountSaga.getScatterIdentity,
    ),
    takeLatest(
      accountTypes.AUTHENTICATE_SCATTER,
      accountSaga.authenticateScatter,
    ),
    takeLatest(
      accountTypes.FORGET_SCATTER_IDENTITY,
      accountSaga.forgetScatterIdentity,
    ),
    takeLatest(
      accountTypes.ORDER,
      accountSaga.order,
    ),

    takeLatest(
      orderBookReducer.types.FETCH_ORDER_BOOK,
      orderBookSaga.fetchOrderBook,
    ),
    takeLatest(tickersTypes.UPDATE_SORT_SAGA, tickersSaga.updateSort),
    takeLatest(tickersTypes.UPDATE_SEARCH_VALUE_SAGA, tickersSaga.updateSearchValue),
    takeLatest(tickersTypes.TOGGLE_SHOW_FAVORITES_SAGA, tickersSaga.toggleShowFavorites),
    takeLatest(tickersTypes.LOAD_COINS, tickersSaga.loadCoins),

    takeLatest(signinTypes.SEND_CONFIRM_EMAIL_SAGA, signinSaga.signin),

    takeLatest(otpTypes.GET_INITIAL_DATA_SAGA, otpSaga.getInitialData),
    takeLatest(otpTypes.AUTHENTICATE_SAGA, otpSaga.authenticate),
  ];
}
