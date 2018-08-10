import { call, put } from 'redux-saga/effects';
import * as api from 'api/otp';
import { actions as otpActions } from './otpReducer';
import modalReducer from '../modal/modalReducer';

export function* getInitialData({ payload: accountName }) {
  try {
    const result = yield call(api.getInitialData, accountName);
    yield put(otpActions.updateData(result));
  } catch (e) {
    console.log(e);
  }
}

export function* authenticate({ payload }) {
  try {
    const result = yield call(api.authenticate, payload);
    if (!result.success) {
      alert('authentication fail');
      return;
    }

    alert('authentication success');
  } catch (e) {
    console.log(e);
  }
  yield put(modalReducer.actions.closeModal());
}
