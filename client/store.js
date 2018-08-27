import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer/reducer';
import saga from './reducer/saga';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState) {
  const store = createStore(
    reducer,
    applyMiddleware(
      sagaMiddleware,
    ),
  );
  
  sagaMiddleware.run(saga);

  if (module.hot) {
    module.hot.accept(['./reducer/reducer', './reducer/saga'], () => {
      const nextReducer = require('./reducer/reducer').default;
      store.replaceReducer(nextReducer);
    })
  }

  return store;
}

const store = configureStore();
export default store;
