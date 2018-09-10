import React from 'react';
import { connect } from 'react-redux';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/order-log/orderLogReducer';
import { SheetRow } from 'components/molecules/Sheet';
import { OrderLogAmount, OrderLogPrice } from '../OrderLog.styled';
import { toFixed } from 'utils/format';

class OpenOrders extends React.PureComponent {
  onCancelOrder(order) {
    const { pair, cancelOrder } = this.props;
    cancelOrder({
      pair,
      ...order,
    });
  }

  render() {
    const {
      orders,
      symbol,
      listType,
    } = this.props;
    return (
      <Query
        action={
          listType === 'openOrders'
            ? actions.fetchOpenOrders({ symbol })
            : actions.fetchCloseOrders({ symbol })
        }
      >
        {({ loading, error }) => {
          if (loading) {
            return '...loading';
          }

          if (!orders) {
            return 'Empty orderbook';
          }

          return (
            // use order.transactionId for SheetRow key
            <div>
              {orders.map((order) => {
                return (
                  <SheetRow
                    key={order.id + '_' + order.type}
                    columns="1fr 1fr 1fr 1fr"
                  >
                    <OrderLogAmount>
                      {toFixed(4, order.volume / 10000)}
                    </OrderLogAmount>
                    <OrderLogPrice>
                      {toFixed(4, order.price / 10000)}
                    </OrderLogPrice>
                    <div onClick={() => this.onCancelOrder(order)}>
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

const mapStateToProps = ({ orderLog }, { symbol, listType }) => {
  const orders = orderLog[listType][symbol];
  return {
    orders,
  };
};

const mapDispatchToProps = dispatch => ({
  cancelOrder: payload => dispatch(actions.cancelOrder(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OpenOrders);
