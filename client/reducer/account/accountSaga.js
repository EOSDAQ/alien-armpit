import { call, put, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import * as scatterApi from 'api/scatter';
import * as accountApi from 'api/account';
import { actions } from './accountReducer';
import modal from '../modal/modalReducer';
import { toFixed } from 'utils/format';

export function* authenticateScatter() {
  try {
    yield call(scatterApi.authenticateScatter);
    yield getScatterIdentity({});
  } catch (e) {

  }
}

export function* getScatterIdentity({ payload = {} }) {
  try {
    const result = yield call(scatterApi.getScatterIdentity);
    yield put(actions.signIn({ viewer: result }));
    const { name: accountName } = result;

    const authInfo = yield call(accountApi.check, accountName);
    const {
      isUserCreated,
      isEmailConfirmed,
      isOtpConfirmed,
    } = authInfo;

    if (!isUserCreated || !isEmailConfirmed) {
      yield put(push('/signin'));
      return;
    }

    if (!isOtpConfirmed) {
      yield put(modal.actions.openModal({
        type: 'OTP_INIT',
      }));
      return;
    }

    yield put(modal.actions.openModal({
      type: 'OTP_CHECK',
    }));
  } catch (e) {
    console.log(e.code, payload);
    if (!e.code) {
      // 스캐터 오류가 아님.
      console.error(e);
      return;
    }
    switch (e.code) {
      case 401:
      case 500: {
        const { showInstallMessage } = payload;
        if (showInstallMessage) {
          yield put(modal.actions.openModal({
            type: 'INSTALL_SCATTER',
          }));
        }
        break;
      }
      case 423: // scatter locked. || authenticate failed.
      case 402: // user closed the popup
      default:
    }
  }
}

export function* forgetScatterIdentity() {
  yield call(scatterApi.forgetScatterIdentity);
  yield put(actions.signOut());
}

export function* order({ payload }) {
  const { type, price, amount } = payload;

  try {
    const from = yield select(s => s.account.viewer.name);
    yield call(scatterApi.transfer, {
      quantity: `${toFixed(4, price * amount)} ${type === 'sell' ? 'ABC' : 'SYS'}`,
      price: parseFloat(price),
      from,
    });
  } catch (e) {
    console.log(e.code);
    if (!e.code) {
      // 스캐터 오류가 아님.
      console.error(e);
      return;
    }

    switch (e.code) {
      case 500: {
        const { showInstallMessage } = payload;
        if (showInstallMessage) {
          yield put(modal.actions.openModal({
            type: 'INSTALL_SCATTER',
          }));
        }
        break;
      }
      case 423: // scatter locked.
      case 402: // user closed the popup
      default:
    }
  }
}
