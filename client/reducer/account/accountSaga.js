import { call, put, select } from 'redux-saga/effects';
import * as api from './accountApi';
import { actions } from './accountReducer';
import modal from '../modal/modalReducer';

export function* getScatterIdentity({ payload = {} }) {

  try {
    const result = yield call(api.getScatterIdentity);
    yield put(actions.signIn({ viewer: result }));
  } catch (e) {
    if (e.code && e.code === 423) {
      // scatter locked.
      return;
    }

    const { showInstallMessage } = payload;
    if (showInstallMessage) {
      yield put(modal.actions.openModal({
        type: 'INSTALL_SCATTER',
      }));
    }
  }
}

export function* forgetScatterIdentity() {
  yield call(api.forgetScatterIdentity);
  yield put(actions.signOut());
}

export function* order({ payload }) {
  const { type, price, amount } = payload;
  const from = yield select(s => s.account.viewer.name);

  yield call(api.transfer, {
    quantity: `${(price * amount).toFixed(4)} ${type === 'sell' ? 'ABC' : 'SYS'}`,
    price: parseFloat(price),
    from,
  });
}
