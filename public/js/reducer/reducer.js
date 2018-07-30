// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tickersReducer from './tickers/tickersReducer';
// import orderFormReducer from './order-form/orderFormReducer';
import orderLogReducer from './order-log/orderLogReducer';
import languageReducer from './language/languageReducer';
import accountReducer, { type AccountState } from './account/accountReducer';

const reducer = combineReducers({
  language: languageReducer,
  route: routerReducer,
  tickers: tickersReducer,
  account: accountReducer,
  // orderForm: orderFormReducer,
  orderLog: orderLogReducer,
});

export type AppState = {
  account: AccountState,
}

export default reducer;
