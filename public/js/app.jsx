import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import createSagaMiddleware from 'redux-saga';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import './common/css/global.styled';
import reducer from './reducer/reducer';
import theme from './common/css/theme';
import i18n from './i18n';
import pages from './pages';
import saga from './reducer/saga';

const history = createHistory();
const middleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  compose(applyMiddleware(middleware, sagaMiddleware)),
);

sagaMiddleware.run(saga);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Switch>
              {pages.map(pageProps => (
                <Route
                  key={pageProps.path.slice(1)}
                  {...pageProps}
                />
              ))}
            </Switch>
          </ConnectedRouter>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept(
    ['./pages.jsx'],
    render,
  );
}

render();
