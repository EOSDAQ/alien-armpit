import store from '../app';
import { matchPath } from 'react-router-dom';

export const getViewer = state => (state.account.viewer);
export const getTicker = (state, { match: { params }}) => (
  state.tickers.box.coinList.filter(c =>
    c.coinCode.replace('/', '_') === params.coinCode
  )[0]
);

export const getToken = (id) => {
  return (state) => state.tokens[id];
}

export const getRouteMatch = (state, path) => {
  const match = matchPath(state.router.location.pathname, {
    path,
  });

  return match;
}