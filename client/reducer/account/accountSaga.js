import { call, put, select, takeEvery } from 'redux-saga/effects';
import { navigate } from '@reach/router';
import * as scatterApi from 'api/scatter';
import * as accountApi from 'api/account';
import { actions, types } from './accountReducer';
import modal from '../modal/modalReducer';
import { toFixed } from 'utils/format';

export function* authenticateScatter() {
  try {
    yield call(scatterApi.authenticateScatter);
    yield restoreSession();
    // yield getScatterIdentity({});
  } catch (e) {
  }
}

export function* restoreSession() {
  const account = yield getScatterIdentity();
  try {
    let user = yield call(accountApi.get, account.name);
    yield updateAccount(account, user);
  } catch(e) {
    return;
  }
}

export function* signUp({ payload }) {
  try {
    let account = yield call(scatterApi.getScatterIdentity);
    const { isUserCreated } = yield call(accountApi.get, account.name);
    if (isUserCreated) {
      // email 중복 처리
    }
  } catch (err) {
    console.error(err);
  }
}

function* updateAccount(account, user) {
  const { emailConfirm, otpConfirm } = user;
  const security = [emailConfirm, otpConfirm].filter(Boolean).length;

  yield put(actions.updateAccountInfo({
    authenticated: true,
    ...account,
    security,
    emailConfirm,
    otpConfirm,
  }));
}

export function* signIn() {
  const account = yield getScatterIdentity();
  
  try {
    const user = yield call(accountApi.get, account.name);
    yield updateAccount(account, user);
  } catch(err) {
    // user is null;
    yield put(actions.updateAccountInfo(account));
    navigate('/signup');
  }
}

export function* getScatterIdentity() {
  try {
    const account = yield call(scatterApi.getScatterIdentity);
    return account;
    // yield put(actions.updateAccountInfo({ account }));
    // yield signIn({ account });
    // if (!isOtpConfirmed) {
    //   yield put(modal.actions.openModal({
    //     type: 'OTP_INIT',
    //   }));
    //   return;
    // }

    // yield put(modal.actions.openModal({
    //   type: 'OTP_CHECK',
    // }));
  } catch (e) {

    if (!e.code) {
      // 스캐터 오류가 아님.
      console.error(e);
      return;
    }
    switch (e.code) {
      case 401:
      case 500: {
        yield put(modal.actions.openModal({
          type: 'INSTALL_SCATTER',
        }));
        // const { showInstallMessage } = payload;
        // if (showInstallMessage) {
        // }
        break;
      }
      case 423: // scatter locked. || authenticate failed.
      case 402: // user closed the popup
      default:
    }

    return null;
  }
}

export function* forgetScatterIdentity() {
  yield call(scatterApi.forgetScatterIdentity);
  yield put(actions.signOut());
}

export function* order({ payload }) {
  let { type, price, amount, symbol } = payload;

  try {
    const from = yield select(s => s.account.name);

    if (type === 'bid') {
      yield call(scatterApi.bid, {
        price: parseFloat(price),
        amount: toFixed(4, amount) + ' ' + symbol,
        from,
      })
    } else {
      yield call(scatterApi.ask, {
        price: parseFloat(price),
        amount: toFixed(4, amount * price) + ' SYS',
        from,
      })
    }
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

const accountSaga = [
  takeEvery(types.SIGN_IN, signIn),
  takeEvery(types.SIGN_UP, signUp),
  takeEvery(types.ORDER, order),
  takeEvery(types.AUTHENTICATE_SCATTER, authenticateScatter),
  takeEvery(types.FORGET_SCATTER_IDENTITY, forgetScatterIdentity),
  takeEvery(types.GET_SCATTER_IDENTITY, getScatterIdentity),
];

export default accountSaga;
