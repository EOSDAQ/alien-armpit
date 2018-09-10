import React from 'react';
import { connect } from 'react-redux';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/order-log/orderLogReducer';
import { SheetRow } from 'components/molecules/Sheet';
import { OrderLogAmount, OrderLogPrice } from '../OrderLog.styled';

class OpenOrders extends React.PureComponent {
  render() {
    const { orders, symbol } = this.props;
    
    return (
      <Query
        action={actions.fetchOpenOrders({ symbol })}
      >
        {({ loading, error }) => {
          if (loading) {
            return '...loading'
          }

          if (!orders) {
            return 'Empty orderbook'
          }

          return (
            // use order.transactionId for SheetRow key
            <div>
              {orders.map((order, i) => {
                return (
                  <SheetRow
                    key={i}
                    columns="1fr 1fr 1fr 1fr"
                  >
                    <OrderLogAmount>
                      {order.volume / 10000}
                    </OrderLogAmount>
                    <OrderLogPrice>
                      {order.price / 10000}
                    </OrderLogPrice>
                    <div>
                      Cancel
                    </div>
                  </SheetRow>
                );
              })}

            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = ({ orderLog }, { symbol }) => {
  const orders = orderLog.openOrders[symbol];
  return {
    orders,
  };
}

export default connect(
  mapStateToProps,
)(OpenOrders);
