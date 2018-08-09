import { createAction, handleActions } from 'redux-actions';

const types = {
  FETCH_ORDER_BOOK: 'orderBook/FETCH',
  UPDATE_ORDER_BOOK: 'orderBook/UPDATE',
};

const actions = {
  fetchOrderBook: createAction(types.FETCH_ORDER_BOOK),
  updateOrderBook: createAction(types.UPDATE_ORDER_BOOK),
};

const defaultState = {
  fetching: true,
  data: null,
  error: null,
};

const reducer = handleActions({
  [types.FETCH_ORDER_BOOK]: state => ({
    ...state,
    fetching: true,
  }),
  [types.UPDATE_ORDER_BOOK]: (state, { payload: { data } }) => {
    let { bid, ask, info } = data;
    ask = ask.sort((a, b) => a.price > b.price ? -1 : 1);
    bid = bid.sort((a, b) => a.price > b.price ? -1 : 1);

    ask = ask.map(order => ({
      ...order,
      change: (order.price - info.prevPrice) / info.currentPrice, 
    })).slice(0, 8);

    bid = bid.map(order => ({
      ...order,
      change: (order.price - info.prevPrice) / info.currentPrice, 
    })).slice(0, 8);

    return {
      ...state,
      fetching: false,
      data: {
        ask,
        bid,
        info: {
          ...info,
          maxQuotes: bid.concat(ask).sort((a, b) => a.quotes > b.quotes ? -1 : 1)[0].quotes,
        },
      },
    }
  },
}, defaultState);

export default {
  types,
  actions,
  reducer,
};
