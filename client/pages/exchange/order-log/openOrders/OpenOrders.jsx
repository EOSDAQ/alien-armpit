import React from 'react';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/order-log/orderLogReducer';

class OpenOrders extends React.PureComponent {
  render() {
    const { symbol } = this.props;
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

export default OpenOrders;
