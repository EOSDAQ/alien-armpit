import { call, put, takeLatest } from 'redux-saga/effects';
import * as api from 'api/otp';
import { actions as otpActions, types } from './otpReducer';
import { actions as apiActions } from '../api/apiReducer';
import { actions as accountActions } from '../account/accountReducer';
import modalReducer from '../modal/modalReducer';

export function* initOtp({ payload }) {
  yield put(apiActions.fetchQuery(payload));
  const { data, error } = yield call(api.initOtp, payload);

  if (error) {
    return;
  }

  const { otpKey } = data;
  yield put(otpActions.updateData({ otpKey }));
  yield put(apiActions.updateQuery({
    ...payload,
    error,
  }));
}

export function* validateOtp({ payload }) {
  yield put(apiActions.fetchQuery(payload));
  const { error } = yield call(api.validateOtp, payload.code);
  if (error) {
    alert('Invalid code');
  } else {
    yield put(modalReducer.actions.closeModal());
    yield put(accountActions.checkOtpAuth());
    yield put(accountActions.checkOtpConfirm());
  }

  yield put(apiActions.updateQuery({
    ...payload,
    error,
  }));
}

export function* signinWithOtp({ payload: code }) {
  const { error } = yield call(api.validateOtp, code);
  if (error) {
    alert('Invalid code');
  } else {
    yield put(accountActions.checkOtpAuth());
  }
}

const otpSaga = [
  takeLatest(types.INIT_OTP_SAGA, initOtp),
  takeLatest(types.VALIDATE_OTP_SAGA, validateOtp),
  takeLatest(types.SIGNIN_WITH_OTP_SAGA, signinWithOtp),
];

export default otpSaga;
