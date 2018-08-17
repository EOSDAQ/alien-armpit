import 'babel-polyfill';

import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';

import 'components/css/global.styled';
import theme from './components/css/theme';
import i18n from './i18n';

// eslint-disable-next-line
import Pages from 'pages/Pages';
import store from './store';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Pages />
          </BrowserRouter>
        </ThemeProvider>
      </I18nextProvider>
    </Provider>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept(
    ['./pages/Pages.jsx', './store.js'],
    render,
  );
}

render();
