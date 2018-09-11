import {
  put,
  call,
  takeEvery,
} from 'redux-saga/effects';
import { types, actions } from './apiReducer';

function* fetchQuery({ payload }) {
  const { query, poll, cacheKey } = payload;
  let error;

  try {
    yield put({
      ...query,
      next: function* (data = {}) {
        yield put(actions.updateQuery({
          poll,
          cacheKey,
          ...data,
        }))
      },
    });
  } catch(e) {
    error = e;
    console.error(e);
  }
}

const apiSaga = [
  takeEvery(types.FETCH_QUERY, fetchQuery),
]

export default apiSaga;
