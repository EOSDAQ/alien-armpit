import { call, put } from 'redux-saga/effects';
import * as api from 'api/otp';
import { actions as otpActions } from './otpReducer';
import modalReducer from '../modal/modalReducer';

export function* initOtp({ payload }) {
  try {
    const result = yield call(api.initOtp, payload);
    const { resultData: { accountName, otpKey } } = result;
    yield put(otpActions.updateData({ otpKey }));
  } catch (e) {
    console.log(e);
  }
}

export function* validateOtp({ payload }) {
  const { data, error } = yield call(api.validateOtp, payload);
  if (error) {
    alert('Invalid code');
    return;
  }

  yield put(modalReducer.actions.closeModal());
}
