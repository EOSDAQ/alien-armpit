// @flow

import { type Effect } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as api from './accountApi';
import { actions } from './accountReducer';

export function* getScatterIdentity(): Generator<Effect, void, any> {
  try {
    const result = yield call(api.getScatterIdentity);
    yield put(actions.signIn(result));
  } catch (e) {
    console.error(e);
  }
}

export function* forgetScatterIdentity() {
  yield call(api.forgetScatterIdentity);
  yield put(actions.signOut());
}
