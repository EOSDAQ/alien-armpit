// @flow

import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tickersReducer from './tickers/tickersReducer';
// import orderFormReducer from './order-form/orderFormReducer';
import orderLogReducer from './order-log/orderLogReducer';
import languageReducer from './language/languageReducer';
import accountReducer, { type AccountState } from './account/accountReducer';
import modal, { type ModalState } from './modal/modalReducer';

const reducer = combineReducers({
  language: languageReducer,
  route: routerReducer,
  tickers: tickersReducer,
  account: accountReducer,
  // orderForm: orderFormReducer,
  modal: modal.reducer,
  orderLog: orderLogReducer,
});

export type AppState = {
  modal: ModalState,
  account: AccountState,
}

export default reducer;
