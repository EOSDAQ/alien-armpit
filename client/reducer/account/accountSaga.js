import { call, put, select, takeEvery } from 'redux-saga/effects';
import { navigate } from '@reach/router';
import * as scatterApi from 'api/scatter';
import * as accountApi from 'api/account';
import { actions, types } from './accountReducer';
import modal from '../modal/modalReducer';
import { toFixed } from 'utils/format';
import { proxy } from 'api/apis';

export function* authenticateScatter() {
  try {
    yield call(scatterApi.authenticateScatter);
    yield restoreSession();
  } catch (e) {

  }
}

export function* restoreSession() {
  const account = yield getScatterIdentity();
  const { data, error } = yield call(proxy.get, `/account/user/${account.name}`);
  if (data) {
    const { user } = data;
    yield updateAccount(account, user);

    if (user.otpConfirm) {
      yield put(modal.actions.openModal({
        type: 'OTP_CHECK',
      }));
    }
  }

  if (error) {
    yield forgetScatterIdentity();
  }
}

export function* signUp() {
  const account = yield getScatterIdentity();

  if (!account) {
    return;
  }

  const { data, error } = yield call(proxy.get, `/account/user/${account.name}`);
  // user가 이미 있으면, 이미 회원가입이 된 것이므로 에러 표시를 해준다.
  if (data) {
    yield forgetScatterIdentity();
    alert('already signed up! Please go to sign in');
  }

  if (error) {
    yield put(actions.updateAccountInfo(account));
    navigate('/signup');
  }

}

export function* createAccount({ payload: { email } }) {
  const { name } = yield select(state => state.account);
  const data = yield call(accountApi.signUp, {
    accountName: name,
    email,
  });
  
  // TODO.
  if (data) {
    // successful
    yield put(actions.createdAccount({
      email,
    }));
    navigate('/sent-email');
  }
}

function* updateAccount(account, user) {
  const { emailConfirm, otpConfirm, email } = user;
  const security = [emailConfirm, otpConfirm].filter(Boolean).length;

  yield put(actions.updateAccountInfo({
    authenticated: true,
    ...account,
    security,
    email,
    emailConfirm,
    otpConfirm,
  }));
}

export function* signIn() {
  const account = yield getScatterIdentity();
  if (!account) return;

  const { data, error } = yield call(proxy.get, `/account/user/${account.name}`);

  if (error) {
    alert('Account is not registered!');
    return;
  }

  if (data) {
    const { user } = data;
    
    yield updateAccount(account, user);
    console.log(signIn);
    // localStorage.setItem()
    const { otpConfirm } = user;

    if (otpConfirm) {
      yield put(modal.actions.openModal({
        type: 'OTP_CHECK',
      }));
    } else {
    }

    return;
  }
}

export function* getScatterIdentity() {
  try {
    const account = yield call(scatterApi.getScatterIdentity);
    return account;
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

export function* resendEmail({ payload: { email }}) {
  const account = yield select(state => state.account);
  const data = yield call(accountApi.resendEmail, {
    accountName: account.name,
    email,
  });

  yield put(actions.updateAccountInfo({
    email,
  }));

  alert('Verification email sent');
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
  takeEvery(types.CREATE_ACCOUNT, createAccount),
  takeEvery(types.ORDER, order),
  takeEvery(types.RESEND_EMAIL, resendEmail),
  takeEvery(types.AUTHENTICATE_SCATTER, authenticateScatter),
  takeEvery(types.FORGET_SCATTER_IDENTITY, forgetScatterIdentity),
  takeEvery(types.GET_SCATTER_IDENTITY, getScatterIdentity),
];

export default accountSaga;
