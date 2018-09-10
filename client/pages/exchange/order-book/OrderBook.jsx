import React from 'react';
import { withRouter } from 'react-router-dom';
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
import OrderBookLoader from './OrderBookLoader';
import { getRouteMatch, getRouteParams } from 'reducer/selector';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/order-book/orderBookReducer';

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
  render() {
    const {
      token, ask, bid, info,
    } = this.props;

    if (!token) return null;
    const scrollStyle = { style: { height: 512 } };
    const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);
    const {
      symbol,
      baseSymbol,
    } = token;

    return (
      <OrderBookWrapper>
        <OrderBookHeader />
        <Query
          action={actions.fetchOrderBook({ symbol, baseSymbol })}
          pollInterval={3000}
        >
          {({ loading, polling, error }) => {
            if (loading) {
              return <OrderBookLoader />;
            }

            return (
              <React.Fragment>
                <Scrollbars {...scrollOptions}>
                  {polling && '...receiving data'}
                  <Flex>
                    <OrderBookList
                      orderList={ask}
                      maxQuotes={info.maxQuotes}
                      isUpside
                    />
                    <OrderBookTradeInfo />
                  </Flex>
                  <Flex>
                    <OrderBookTradeLog tradeLogList={mockTradeLog} />
                    <OrderBookList
                      orderList={bid}
                      maxQuotes={info.maxQuotes}
                    />
                  </Flex>
                </Scrollbars>
                <OrderBookFooter
                  totalBidQuotes={info.totalBidQuotes}
                  totalAskQuotes={info.totalAskQuotes}
                />
              </React.Fragment>
            );
          }}
        </Query>
      </OrderBookWrapper>
    );
  }
}

const mapStateToProps = (state, { code }) => {
  return {
    ...state.orderBook[code],
    token: state.tokens[code],
  };
};

export default connect(
  mapStateToProps,
)(ExchangeOrderBook);
