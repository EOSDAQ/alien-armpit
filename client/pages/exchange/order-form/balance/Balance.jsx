import React from 'react';
import { connect } from 'react-redux';
import Query from 'components/molecules/Query';
import { actions } from 'reducer/balance/balanceReducer';
import { toFixed } from 'utils/format';
import { BalanceLabel, BalanceValue, BalanceCurrency, BalanceWrapper } from './Balance.styled';

class Balance extends React.Component {
  render() {
    const { 
      balance,
      isBase,
      token: { pair, symbol, baseSymbol },
    } = this.props;

    const action = isBase
      ? actions.getBaseBalance({})
      : actions.getCurrencyBalance({ pair });

    return (
      <Query action={action}>
        {({ error, loading }) => {
          if (loading) {
            return 'loading balance ...';
          }

          return (
            <BalanceWrapper>
              <BalanceLabel>
                Balance
              </BalanceLabel>
              <BalanceValue>
                {toFixed(4, balance)}
                <BalanceCurrency>
                  {isBase ? baseSymbol : `${symbol} / ${baseSymbol}`}
                </BalanceCurrency>
              </BalanceValue>
            </BalanceWrapper>
          )
        }}
      </Query>
    );
  }
}

const mapStateToProps = ({ balance } , { isBase, token: { pair }}) => {
  return {
    balance: balance[isBase ? gOption.baseCurrency : pair],
  };
}

export default connect(
  mapStateToProps,
)(Balance);
