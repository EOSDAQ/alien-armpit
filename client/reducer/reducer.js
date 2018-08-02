// @flow

import { combineReducers } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux/index';
import { routerReducer } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react-router-redux/index';
import { reducer as formReducer } from '../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/redux-form/index';
import tickersReducer from './tickers/tickersReducer';
// import orderFormReducer from './order-form/orderFormReducer';
import orderLogReducer from './order-log/orderLogReducer';
import languageReducer from './language/languageReducer';
import accountReducer, { type AccountState } from './account/accountReducer';
import modal, { type ModalState } from './modal/modalReducer';

const reducer = combineReducers({
  form: formReducer,
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
