import React from 'react';
import { connect } from 'react-redux';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';
import { actions } from 'reducer/account/accountReducer';
import { OrderFormDisabled } from './OrderForm.styled';

const OrderForm = (props) => {
  const { viewer, token, order } = props;
  if (!token) return null;
  const types = ['bid', 'ask'];
  
  return (
    <SheetWrapper>
      {!viewer && <OrderFormDisabled />}
      {viewer && (
        <Flex>
          {types.map(type => (
            <OrderFormPanel
              key={type}
              type={type}
              symbol={token.symbol}
              token={token}
              baseSymbol={token.baseSymbol}
              order={order}
            />
          ))}
        </Flex>
      )}
    </SheetWrapper>
  );
}

const mapStateToProps = (state, { code }) => {
  return {
    authenticated: state.account.authenticated,
    viewer: state.account.viewer,
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
