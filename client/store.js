import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer/reducer';
import saga from './reducer/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(applyMiddleware(routerMiddleware(history), sagaMiddleware)),
);

sagaMiddleware.run(saga);

export default store;
