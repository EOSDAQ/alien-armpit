import * as React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'styled-components';
import 'import-nonce'; // It should be placed next to ThemePriovider

import 'components/css/global.styled';
import theme from './components/css/theme';
import i18n from './i18n';

// eslint-disable-next-line
import Pages from 'pages/Pages';
import store from './store';
import saga from 'reducer/saga';

const render = () => {
  store.cancelSaga();
  store.runSaga(saga);

  ReactDOM.render(
    <Provider store={store}>
      <I18nextProvider i18n={i18n}>
        <ThemeProvider theme={theme}>
          <Pages />
        </ThemeProvider>
      </I18nextProvider>
    </Provider>,
    document.getElementById('app'),
  );
};

if (module.hot) {
  module.hot.accept(
    ['./pages/Pages.jsx', './reducer/saga'],
    render,
  );
}

render();
