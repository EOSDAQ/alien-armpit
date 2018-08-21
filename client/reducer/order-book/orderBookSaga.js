import { call, put } from 'redux-saga/effects';
import orderBookReducer from './orderBookReducer';
import * as api from './orderBookApi';
import * as apiReducer from '../api/apiReducer';

export function* fetchOrderBook({ payload }) {
  try {
    yield put(apiReducer.actions.fetchQuery(payload));
    const data = yield call(api.loadOrderBook, payload);
    let { bid, ask } = data;
    const slicedBid = bid ? bid.slice(0, 8) : [];
    const slicedAsk = ask ? ask.slice(-8) : [];

    const orders = slicedAsk.concat(slicedBid)
      .map(order => {
        order.change = 0;
        order.price = (order.price || 0) / 10000;
        if (order.type === 1) {
          order.volume = order.volume / order.price / 10000;
        } else {
          order.volume = (order.volume || 0) / 10000;
        }
        // if (!info) {
        //   order['change'] = 0
        // } else {
        //   order['change'] = (order.price - info.prevPrice) / info.prevPrice;
        // }
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

    yield put(apiReducer.actions.updateQuery({
      ...payload,
      data: {
        ask,
        bid,
        info,
      }
    }));
  } catch (e) {
    console.error(e);
  }
}
