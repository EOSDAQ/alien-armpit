import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import reducer from './reducer/reducer';
import saga from './reducer/saga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const store = createStore(
  reducer,
  compose(
    applyMiddleware(
      sagaMiddleware,
      routerMiddleware(history),
    ),
  ),
);

sagaMiddleware.run(saga);

export default store;
