import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import reducer from './reducer/reducer';
import saga from './reducer/saga';

const sagaMiddleware = createSagaMiddleware();

export const history = createBrowserHistory();

const store = createStore(
  connectRouter(history)(reducer),
  compose(
    applyMiddleware(
      routerMiddleware(history),
      sagaMiddleware,
    ),
  ),
);

sagaMiddleware.run(saga);

export default store;
