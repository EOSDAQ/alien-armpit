import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from 'constants/constants';

import {
  OrderBookWrapper,
} from './OrderBook.styled';
import Flex from 'components/atom/Flex';
import OrderBookHeader from './OrderBookHeader';
import OrderBookList from './OrderBookList';
import OrderBookTradeInfo from './OrderBookTradeInfo';
import OrderBookTradeLog from './OrderBookTradeLog';
import OrderBookFooter from './OrderBookFooter';
import orderBookReducer from 'reducer/order-book/orderBookReducer';

const mockTradeLog = [
  { price: 43.90, amount: 99226.283 },
  { price: 43.90, amount: 67160.079 },
  { price: 43.80, amount: 773.717 },
  { price: 43.80, amount: 56632.079 },
  { price: 43.80, amount: 21970.564 },
  { price: 43.80, amount: 100.000 },
  { price: 44.00, amount: 4171.122 },
  { price: 44.00, amount: 22767.659 },
  { price: 44.00, amount: 10000.000 },
];

class ExchangeOrderBook extends React.Component {
  componentDidMount() {
    const { fetchOrderBook } = this.props;
    fetchOrderBook();
    this.fetcher = setInterval(fetchOrderBook, 4000);
  }

  componentWillUnmount() {
    this.fetcher && clearInterval(this.fetcher);
  }

  render() {
    const { fetching, data } = this.props;

    const scrollStyle = { style: { height: 512 } };
    const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);

    if (fetching && !data) {
      return 'waiting for order book data';
    }

    const {
      totalBidQuotes,
      totalAskQuotes,
    } = data.info;

    return (
      <OrderBookWrapper>
        <OrderBookHeader />
        <Scrollbars {...scrollOptions}>
          <Flex>
            <OrderBookList
              orderList={data.ask}
              maxQuotes={data.info.maxQuotes}
              isUpside
            />
            <OrderBookTradeInfo />
          </Flex>
          <Flex>
            <OrderBookTradeLog tradeLogList={mockTradeLog} />
            <OrderBookList
              orderList={data.bid}
              maxQuotes={data.info.maxQuotes}
            />
          </Flex>
        </Scrollbars>
        <OrderBookFooter
          totalBidQuotes={totalBidQuotes}
          totalAskQuotes={totalAskQuotes}
        />
      </OrderBookWrapper>
    );
  }
};

const mapStateToProps = state => ({ ...state.orderBook });
const mapDispatchToProps = dispatch => ({
  fetchOrderBook: () => dispatch(orderBookReducer.actions.fetchOrderBook()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeOrderBook);
