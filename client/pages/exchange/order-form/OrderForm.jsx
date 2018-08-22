import React from 'react';
import { connect } from 'react-redux';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';
import { actions } from 'reducer/account/accountReducer';
import { OrderFormDisabled } from './OrderForm.styled';
import { getRouteMatch } from 'reducer/selector';

class OrderForm extends React.Component {
  onSubmit(values, type) {
    const { order, token } = this.props;
    const coinCode = token.symbol;

    order({
      ...values,
      type,
      coinCode,
    });
  }

  render() {
    const { authenticated, token } = this.props;
    const types = ['buy', 'sell'];
                                      
    return (
      <SheetWrapper>
        {!authenticated && <OrderFormDisabled />}
        <Flex>
          {types.map(type => (
            <OrderFormPanel
              key={type}
              form={`order-${type}`}
              token={token}
              onSubmit={e => this.onSubmit(e, type)}
            />
          ))}
        </Flex>
      </SheetWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  const match = getRouteMatch(state, '/exchange/:code');

  return {
    authenticated: state.account.authenticated,
    token: state.tokens[match.params.code],
  }
};

const mapDispatchToProps = dispatch => ({
  order: payload => dispatch(actions.order(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderForm);
