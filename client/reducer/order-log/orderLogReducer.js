import { combineReducers } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/redux/index';
import { createAction, handleActions } from '../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/redux-actions/index';

export const types = {
  UPDATE_TAB: 'tradeLog/tab/UPDATE',
};

export const actions = {
  updateTab: createAction(types.UPDATE_TAB),
};

const defaultState = {
  tab: '거래기록',
};

const tab = handleActions({
  [types.UPDATE_TAB]: (state, { payload }) => (payload),
}, defaultState.tab);

export default combineReducers({
  tab,
});
