import 'babel-polyfill';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import 'components/css/global.styled';
import theme from './components/css/theme';
import i18n from './i18n';

// eslint-disable-next-line
import Pages from 'pages/Pages';
import store from './store';

const history = createHistory();

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <ConnectedRouter history={history}>
            <Pages />
          </ConnectedRouter>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept(
    ['./pages/Pages.jsx'],
    render,
  );
}

render();
