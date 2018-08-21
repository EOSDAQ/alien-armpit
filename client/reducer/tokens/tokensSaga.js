import { call, put, takeEvery } from 'redux-saga/effects';
import { types } from './tokensReducer';

function* fetchTokens() {

}

export default [
  takeEvery(
    types.FETCH_TOKENS,
    fetchTokens,
  ),
];
