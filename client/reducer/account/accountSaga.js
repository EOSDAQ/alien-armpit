import ecc from 'eosjs-ecc';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { navigate } from '@reach/router';
import * as scatterApi from 'api/scatter';
import * as accountApi from 'api/account';
import { actions, types } from './accountReducer';
import modal from '../modal/modalReducer';
import { toFixed } from 'utils/format';
import { proxy } from 'api/apis';
import * as apiReducer from '../api/apiReducer';

export function* restoreSession() {
  const account = yield getScatterIdentity();
  const { data, error } = yield call(proxy.get, `/account/user/${account.name}`);
  if (data) {
    const { user } = data;
    console.log(user);
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
  try {
    yield call(scatterApi.forgetScatterIdentity);
  } catch(e) {
    console.error(e);
  }

  const account = yield getScatterIdentity();
  if (!account) {
    return;
  }


  yield put(actions.updateAccountInfo(account));
  navigate('/signup');
}

export function* createAccount({ payload: { email } }) {
  const account = yield call(getScatterIdentity);
  if (!account) {
    return;
  }

  const body = {
    accountHash: account.sig,
    accountName: account.name,
    accountPublicKey: account.publicKey,
    email,
  };

  const { data, error } = yield call(accountApi.signUp, body);

  // TODO 
  if (error) {
    alert(error.statusText);
    return;
  }
 
  yield put(actions.createdAccount({
    email,
  }));
  yield put(actions.checkSentEmail());
  yield put(actions.updateViewer(data));
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
  try {
    yield call(scatterApi.forgetScatterIdentity);
  } catch(e) {
    console.error(e);
  }

  const payload = yield getScatterIdentity();
  if (!payload) {
    // handle error later.
    return;
  }

  const {
    signature,
    account,
    identity,
  } = payload;

  const { data, error } = yield call(accountApi.signIn, { 
    accountName: account.name,
    publicKey: identity.publicKey,
    signature,
  });

  if (error) {
    yield call(scatterApi.forgetScatterIdentity);
    alert('Provided account is not registered');
    return;
  }

  if (data) {
    const { user } = data;
    yield put(actions.updateViewer({
      viewer: user,
    }));

    /**
     * otpConfirm이 되어있는 사용자의 경우에는,
     * signIn 메소드 후에 otp 인증 페이지로 이동하고,
     * 그 후에 token을 발급받아 refresh 하는 방식으로 바꿔야함.
     */

    location.href = '/';
    return;
  }
}

function* getScatterIdentity() {
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

function* resendEmail({ payload: { email }}) {
  const viewer = yield select(state => state.account.viewer);
  const { data, error } = yield call(accountApi.resendEmail, {
    accountName: viewer.accountName,
    email,
  });

  if (error) {
    alert('Failed to send email');
    console.log(error);
    return;
  }

  yield put(actions.updateAccountInfo({
    email,
  }));

  alert('Verification email sent');
}

function* order({ payload }) {
  let { type, price, amount, symbol, token } = payload;

  /**
   * token 인증 방식으로 바꼈으므로, 중간에 scatter가 lock되거나,
   * identity가 바뀐 경우를 대비해 다시 identity를 갖고 온다.
   */
  const viewer = yield select(state => state.account.viewer);
  if (!viewer) {
    alert('You must be signed-in to continue this action!');
    return;
  }

  const account = yield call(scatterApi.getScatterIdentity);

  if (!account) {
    return;
  }

  if (viewer.accountName !== account.name) {
    alert('Scatter Identity is different from currently signed-in account! ARE YOU ATTACKING US? If not, please sign out and proceed to sign-in again');

    return;
  }

  try {
    const from = account.name;

    if (type === 'bid') {
      yield call(scatterApi.bid, {
        price: parseFloat(price),
        amount: toFixed(4, amount) + ' ' + symbol,
        token,
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
      try {
        const err = JSON.parse(e.message);
        console.log(err);
      } catch(err) {
      }
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

function* signOut() {
  try {
    yield call(scatterApi.forgetScatterIdentity);
  } catch(err) {
    console.error(err.message);
  }
  yield call(accountApi.signOut);
  location.href = '/';
}

function* getViewer({ payload }) {
  yield put(apiReducer.actions.fetchQuery(payload));
  const { data, error } = yield call(proxy.get, '/account/viewer');
  if (data) {
    const exist = yield  select(state => state.account.viewer);
    yield put(actions.updateViewer(data));
    yield put(apiReducer.actions.updateQuery(payload));

    if (!exist) {
      if (data.viewer.otpConfirm) {
        yield put(modal.actions.openModal({
          type: 'OTP_CHECK',
        }));
      }
    }
    
  }

  if (error) {
    yield put(apiReducer.actions.updateQuery({
      ...payload,
      error,
    }));
  }
}

const accountSaga = [
  takeEvery(types.SIGN_UP, signUp),
  takeEvery(types.SIGN_IN, signIn),
  takeEvery(types.SIGN_OUT, signOut),
  takeEvery(types.GET_VIEWER, getViewer),
  takeEvery(types.CREATE_ACCOUNT, createAccount),
  takeEvery(types.ORDER, order),
  takeEvery(types.RESEND_EMAIL, resendEmail),
  takeEvery(types.GET_SCATTER_IDENTITY, getScatterIdentity),
];

export default accountSaga;
