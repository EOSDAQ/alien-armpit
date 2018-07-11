import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tickersReducer from './tickers/tickersReducer';
import orderFormReducer from './order-form/orderFormReducer';
import tradeLogReducer from './trade-log/tradeLogReducer';

const reducer = combineReducers({
  route: routerReducer,
  tickers: tickersReducer,
  // orderForm: orderFormReducer,
  tradeLog: tradeLogReducer,
});

export default reducer;
