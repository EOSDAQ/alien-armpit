import {
  createAction,
  handleActions,
} from 'redux-actions';

export const types = {
  GET_CURRENCY_BALANCE: 'currency/balance/get',
  GET_BASE_BALANCE: 'base/balance/get',
  UPDATE_CURRENCY_BALANCE: 'curreny/balance/update',
  UPDATE_BASE_BALANCE: 'base/balance/update',
}

export const actions = {
  getCurrencyBalance: createAction(types.GET_CURRENCY_BALANCE),
  updateCurrencyBalance: createAction(types.UPDATE_CURRENCY_BALANCE),
  getBaseBalance: createAction(types.GET_BASE_BALANCE),
  updateBaseBalance: createAction(types.UPDATE_BASE_BALANCE),
}

const reducer = handleActions({
  [types.UPDATE_CURRENCY_BALANCE]: (state, { payload }) => {
    const { pair, balance } = payload;

    return {
      ...state,
      [pair]: balance,
    };
  },
  [types.UPDATE_BASE_BALANCE]: (state, { payload }) => {
    return {
      ...state,
      [gOption.baseCurrency]: payload.balance,
    }
  }
}, {});

export default reducer;
