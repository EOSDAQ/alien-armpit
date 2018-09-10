import React from 'react';
import { connect } from 'react-redux';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/order-log/orderLogReducer';

class OpenOrders extends React.PureComponent {
  render() {
    const { orders, symbol } = this.props;
    console.log(orders);
    return (
      <Query
        action={actions.fetchOpenOrders({ symbol })}
      >
        {({ loading, error }) => {
          if (loading) {
            return '...loading'
          }

          return null;
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
