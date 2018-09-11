import React from 'react';
import { connect } from 'react-redux';
import { format } from 'date-fns';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/order-log/orderLogReducer';
import { SheetRow } from 'components/molecules/Sheet';
import { OrderLogPrice, OrderLogTime, OrderLogAmount } from '../OrderLog.styled';

class TradeHistory extends React.PureComponent {
  render() {
    const { symbol, rows } = this.props;
    return (
      <Query
        action={actions.fetchTradeHistory({ symbol })}
        pollInterval={3000}
      >
        {({ loading, error, polling }) => {
          if (loading) {
            return 'loading...';
          }
          return (
            <div>
              {rows.map(row => (
                <SheetRow
                  key={row.id}
                  columns="1fr 1fr 1fr"
                >
                  <OrderLogAmount>
                    {row.volume / 10000}
                  </OrderLogAmount>
                  <OrderLogPrice>
                    {row.price / 10000}
                  </OrderLogPrice>
                  <OrderLogTime>
                    {format(row.orderTime, 'h:m MMM.D')}
                  </OrderLogTime>
                </SheetRow>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = ({ orderLog }, { symbol }) => {
  const txs = orderLog.tradeHistory[symbol];
  return {
    rows: txs || [],
  };
};

export default connect(
  mapStateToProps,
)(TradeHistory);
