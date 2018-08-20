import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { routerReducer } from 'react-router-redux';
import tickersReducer from './tickers/tickersReducer';
import orderLogReducer from './order-log/orderLogReducer';
import languageReducer from './language/languageReducer';
import accountReducer from './account/accountReducer';
import otpReducer from './otp/otpReducer';
import modal from './modal/modalReducer';
import orderBookReducer from './order-book/orderBookReducer';

const reducer = combineReducers({
  form: formReducer,
  router: routerReducer,
  language: languageReducer,
  tickers: tickersReducer,
  account: accountReducer,
  modal: modal.reducer,
  orderBook: orderBookReducer.reducer,
  orderLog: orderLogReducer,
  otp: otpReducer,
});

export default reducer;
