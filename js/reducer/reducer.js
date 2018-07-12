import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tickersReducer from './tickers/tickersReducer';
// import orderFormReducer from './order-form/orderFormReducer';
import orderLogReducer from './order-log/orderLogReducer';

const reducer = combineReducers({
  route: routerReducer,
  tickers: tickersReducer,
  // orderForm: orderFormReducer,
  orderLog: orderLogReducer,
});

export default reducer;
