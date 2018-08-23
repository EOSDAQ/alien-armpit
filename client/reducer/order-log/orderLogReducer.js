import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';
import { orderLogTabs } from 'pages/exchange/order-log/orderLogConstants';

export const types = {
  UPDATE_TAB: 'tradeLog/tab/UPDATE',
};

export const actions = {
  updateTab: createAction(types.UPDATE_TAB),
};

const defaultState = {
  tab: orderLogTabs[0],
};

const tab = handleActions({
  [types.UPDATE_TAB]: (state, { payload }) => (payload),
}, defaultState.tab);

export default combineReducers({
  tab,
});
