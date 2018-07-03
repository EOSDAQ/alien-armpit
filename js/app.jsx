import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware, ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'emotion-theming';

import './common/css/global.styled';
import reducer from './reducer/reducer';
import theme from './common/css/theme';
import i18n from './i18n';
import Main from './main/Main';
import Exchange from './exchange/Exchange';


const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  reducer,
  compose(applyMiddleware(middleware)),
);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/exchange" component={Exchange} />
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
    ['./main/Main.jsx'],
    render,
  );
}

render();
