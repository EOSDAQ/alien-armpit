import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { take, cancel, fork } from 'redux-saga/effects';
import reducer from './reducer/reducer';

const RESET_SAGA = 'RESET_SAGA';

function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    applyMiddleware(
      sagaMiddleware,
    ),
  );

  if (module.hot) {
    module.hot.accept('./reducer/reducer', () => {
      const nextReducer = require('./reducer/reducer').default;
      store.replaceReducer(nextReducer);
    })
  }

  return {
    ...store,
    runSaga: (saga) => sagaMiddleware.run(
      // dev vs prod.
      function* main() {
        const sagaTask = yield fork(saga);
        yield take(RESET_SAGA);
        yield cancel(sagaTask);
      }
    ),
    cancelSaga: () => {
      store.dispatch({
        type: RESET_SAGA,
      });
    },
  };
}

export default configureStore();