import { call } from 'redux-saga/effects';
import * as accountApi from 'api/account';

export function* signin({ payload: data }) {
  try {
    const result = yield call(accountApi.signUp, data);

    if (!result.success) {
      throw new Error('error');
      return;
    }
  } catch(err) {
    console.log(err);
  }
}
