import { createAction, handleActions } from 'redux-actions';

const types = {
  FETCH_ORDER_BOOK: 'orderBook/FETCH',
  UPDATE_ORDER_BOOK: 'orderBook/UPDATE',
};

export const actions = {
  fetchOrderBook: createAction(types.FETCH_ORDER_BOOK),
  updateOrderBook: createAction(types.UPDATE_ORDER_BOOK),
};

const defaultState = {};

const reducer = handleActions({
  [types.UPDATE_ORDER_BOOK]: (state, { payload: { data, symbol, baseSymbol } }) => {
    let { bid, ask } = data;
    const slicedBid = bid ? bid.slice(0, 8) : [];
    const slicedAsk = ask ? ask.slice(-8) : [];

    const orders = slicedAsk.concat(slicedBid)
      .map(order => {
        order.change = 0;

        if (order.type === 0) {
          order.volume = order.volume / order.price;
        } else {
          order.volume = (order.volume || 0) / 10000;
        }
        order.price = (order.price || 0) / 10000;
        return order;
      })
      .sort((a, b) => b.price - a.price);

    bid = orders.slice(slicedAsk.length);
    ask = orders.slice(0, slicedAsk.length);

    ask = [...new Array(8 - ask.length).fill(false), ...ask];
    bid = [ ...bid, ...new Array(8 - bid.length).fill(false) ];
    const [maxVolumeOrder] = [ ...orders].sort((a, b) => a.volume > b.volume ? -1 : 1);

    const info = {
      totalBidQuotes: bid.reduce((res, o) => res += (o.volume || 0), 0),
      totalAskQuotes: ask.reduce((res, o) => res += (o.volume || 0), 0),
      maxQuotes: maxVolumeOrder ? maxVolumeOrder.volume : 0,
    }
    return {
      ...state,
      [`${symbol}_${baseSymbol}`]: {
        ask,
        bid,
        info,
      },
    };
  },
}, defaultState);

export default {
  types,
  actions,
  reducer,
};
