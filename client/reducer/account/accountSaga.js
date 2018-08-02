import { call, put } from 'redux-saga/effects';
import * as api from './accountApi';
import { actions } from './accountReducer';
import modal from '../modal/modalReducer';

export function* getScatterIdentity() {
  try {
    const result = yield call(api.getScatterIdentity);
    yield put(actions.signIn({ viewer: result }));
  } catch (e) {
    yield put(modal.actions.openModal({
      type: 'INSTALL_SCATTER',
    }));
  }
}

export function* forgetScatterIdentity() {
  yield call(api.forgetScatterIdentity);
  yield put(actions.signOut());
}
