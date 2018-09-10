import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { orderLogTabs } from 'pages/exchange/order-log/orderLogConstants';

export const types = {
  UPDATE_TAB: 'tradeLog/tab/UPDATE',
  FETCH_TRADE_HISTORY: 'tradeHistory/fetch',
  UPDATE_TRADE_HISTORY: 'tradeHistory/update',
  FETCH_OPEN_ORDERS: 'openOrders/fetch',
  UPDATE_OPEN_ORDERS: 'openOrders/update',
  FETCH_USER_TRADE_HISTORY: 'userTradeHistory/fetch',
  UPDATE_USER_TRADE_HISTORY: 'userTradeHistory/update',
};

export const actions = {
  updateTab: createAction(types.UPDATE_TAB),
  fetchTradeHistory: createAction(types.FETCH_TRADE_HISTORY),
  updateTradeHistory: createAction(types.UPDATE_TRADE_HISTORY),
  fetchOpenOrders: createAction(types.FETCH_OPEN_ORDERS),
  updateOpenOrders: createAction(types.UPDATE_OPEN_ORDERS),
};

const defaultState = {
  tab: orderLogTabs[0],
};

const tab = handleActions({
  [types.UPDATE_TAB]: (state, { payload }) => (payload),
}, defaultState.tab);

const tradeHistory = handleActions({
  [types.UPDATE_TRADE_HISTORY]: (state, { payload }) => {
    const { symbol, transactions } = payload;
    return {
      ...state,
      [symbol]: transactions,
    }
  },
}, {});

const openOrders = handleActions({
  [types.UPDATE_OPEN_ORDERS]: (state, { payload }) => {
    const { symbol, orders } = payload;
    return {
      ...state,
      [symbol]: orders,
    }
  }
}, {});

export default combineReducers({
  tab,
  tradeHistory,
  openOrders,
});
