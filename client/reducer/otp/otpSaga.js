import { call, put } from 'redux-saga/effects';
import * as api from 'api/otp';
import { actions as otpActions } from './otpReducer';
import { actions as apiActions } from '../api/apiReducer';
import modalReducer from '../modal/modalReducer';

export function* initOtp({ payload }) {
  yield put(apiActions.fetchQuery(payload));
  const { data, error } = yield call(api.initOtp, payload);

  if (error) {
    return;
  }

  const { resultData: { otpKey } } = data;
  yield put(otpActions.updateData({ otpKey }));
  yield put(apiActions.updateQuery({
    ...payload,
    error,
  }));
}

export function* validateOtp({ payload }) {
  const { data, error } = yield call(api.validateOtp, payload);
  if (error) {
    alert('Invalid code');
    return;
  }

  yield put(modalReducer.actions.closeModal());
}
