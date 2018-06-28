import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import './common/css/global.styled';
import theme from './common/css/theme';
import Main from './main/Main';

function render() {
  ReactDOM.render(
    <ThemeProvider theme={theme} >
      <Main />
    </ThemeProvider>,
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