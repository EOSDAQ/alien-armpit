import React from 'react';
import { connect } from 'react-redux';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';
import { actions } from 'reducer/account/accountReducer';
import { OrderFormDisabled } from './OrderForm.styled';

class OrderForm extends React.PureComponent {
  onSubmit(values, type) {
    const { order, token } = this.props;

    order({
      ...values,
      type,
      symbol: token.symbol,
    });
  }

  render() {
    const { authenticated, token } = this.props;
    if (!token) return null;
    const types = ['buy', 'sell'];
                   
    return (
      <SheetWrapper>
        {!authenticated && <OrderFormDisabled />}
        <Flex>
          {types.map(type => (
            <OrderFormPanel
              key={type}
              form={`order-${type}`}
              symbol={token.symbol}
              baseSymbol={token.baseSymbol}
              onSubmit={e => this.onSubmit(e, type)}
            />
          ))}
        </Flex>
      </SheetWrapper>
    );
  }
}

const mapStateToProps = (state, { code, ...props }) => {
  return {
    authenticated: state.account.authenticated,
    code,
    token: state.tokens[code],
  }
};

const mapDispatchToProps = dispatch => ({
  order: payload => dispatch(actions.order(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderForm);
