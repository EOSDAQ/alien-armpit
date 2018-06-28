import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from 'emotion-theming';

import './common/css/global.styled';
import theme from './common/css/theme';
import i18n from './i18n';
import Main from './main/Main';


function render() {
  ReactDOM.render(
    <I18nextProvider i18n={ i18n }>
      <ThemeProvider theme={ theme }>
        <Main />
      </ThemeProvider>
    </I18nextProvider>,
    document.getElementById('app')
  );
}

if (module.hot) {
  module.hot.accept(
    ['./main/Main.jsx'],
    render,
  )
}

render();