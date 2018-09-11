import {
  put,
  call,
  takeEvery,
  select,
} from 'redux-saga/effects';
import { types, actions } from './balanceReducer';
import { actions as apiActions } from '../api/apiReducer';
import * as scatterApi from 'api/scatter';

function* getCurrencyBalance({ payload, next }) {
  const { pair } = payload;
  const { accountName } = yield select(state => state.account.viewer);
  const { account } = yield select(state => state.tokens[pair]);

  const apiPayload = {
    code: account,
    account: accountName,
  }

  let balance = yield call(scatterApi.getCurrencyBalance, apiPayload);
  if (!balance) {
    balance = 0;
  } else {
    balance = parseFloat(balance);
  }

  yield put(actions.updateCurrencyBalance({
    balance,
    pair,
  }));

  yield next();
}

function* getBaseBalance({ payload, next }) {
  const { accountName } = yield select(state => state.account.viewer);

  const apiPayload = {
    code: 'eosio.token',
    account: accountName,
  };

  let balance = yield call(scatterApi.getCurrencyBalance, apiPayload);

  if (!balance) {
    balance = 0;
  } else {
    balance = parseFloat(balance);
  }

  yield put(actions.updateBaseBalance({
    balance,
  }));

  yield next();
}

const balanceSaga = [
  takeEvery(types.GET_CURRENCY_BALANCE, getCurrencyBalance),
  takeEvery(types.GET_BASE_BALANCE, getBaseBalance),
]

export default balanceSaga;
