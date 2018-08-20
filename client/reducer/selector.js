import store from '../app';

export const getViewer = state => (state.account.viewer);
export const getTicker = (state, { match: { params }}) => (
  state.tickers.box.coinList.filter(c =>
    c.coinCode.replace('/', '_') === params.coinCode
  )[0]
);

export const getToken = (id) => {
  return (state) => state.tokens[id];
}