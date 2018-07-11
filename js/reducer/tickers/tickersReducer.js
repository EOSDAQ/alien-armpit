import { combineReducers } from 'redux';
import { createAction, handleActions } from 'redux-actions';

export const types = {
  UPDATE_TAB: 'tickers/tab/UPDATE',
};

export const actions = {
  updateTab: createAction(types.UPDATE_TAB),
};

const defaultState = {
  tab: 'EOS',
};

const tab = handleActions({
  [types.UPDATE_TAB]: (state, { payload }) => (payload),
}, defaultState.tab);

export default combineReducers({
  tab,
});
