import { combineReducers } from 'redux';
import tickersReducer from './tickers/tickersReducer';
import orderLogReducer from './order-log/orderLogReducer';
import languageReducer from './language/languageReducer';
import accountReducer from './account/accountReducer';
import otpReducer from './otp/otpReducer';
import modal from './modal/modalReducer';
import orderBookReducer from './order-book/orderBookReducer';
import tokensReducer from './tokens/tokensReducer';
import apiReducer from './api/apiReducer';

const reducer = combineReducers({
  api: apiReducer,
  tokens: tokensReducer,
  language: languageReducer,
  tickers: tickersReducer,
  account: accountReducer,
  modal: modal.reducer,
  orderBook: orderBookReducer.reducer,
  orderLog: orderLogReducer,
  otp: otpReducer,
});

export default reducer;
