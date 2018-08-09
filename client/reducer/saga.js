import { takeLatest } from 'redux-saga/effects';
import { types as tickersTypes } from './tickers/tickersReducer';
import { types as accountTypes } from './account/accountReducer';
import * as tickersSaga from './tickers/tickersSaga';
import * as accountSaga from './account/accountSaga';
import * as orderBookSaga from './order-book/orderBookSaga';
import orderBookReducer from './order-book/orderBookReducer';

export default function* saga() {
  yield [
    takeLatest(
      accountTypes.GET_SCATTER_IDENTITY,
      accountSaga.getScatterIdentity,
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
  ];
}
