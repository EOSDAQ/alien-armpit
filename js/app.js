import React from 'react';
import ReactDOM from 'react-dom';

function render() {
  const Main = require('./main/Main').default;
  ReactDOM.render(
    <Main />,
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