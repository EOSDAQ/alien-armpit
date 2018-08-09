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
    const slicedBid = bid.slice(0, 8);
    const slicedAsk = ask.slice(-8);

    const orders = slicedAsk.concat(slicedBid)
      .map(order => {
        order['change'] = (order.price - info.prevPrice) / info.prevPrice;
        return order;
      })
      .sort((a, b) => b.price - a.price);

    console.log(orders);

    return {
      ...state,
      fetching: false,
      data: {
        bid: orders.slice(slicedAsk.length),
        ask: orders.slice(0, slicedAsk.length),
        info: {
          ...info,
          maxQuotes: [ ...orders].sort((a, b) => a.quotes > b.quotes ? -1 : 1)[0].quotes,
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
