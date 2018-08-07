import React from 'react';
import { connect } from 'react-redux';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';
import { actions } from 'reducer/account/accountReducer';
import { OrderFormDisabled } from './OrderForm.styled';

class OrderForm extends React.Component {
  onSubmit(values, type) {
    const { order } = this.props;
    order({
      ...values,
      type,
    });
  }

  render() {
    const { authenticated } = this.props;
    const types = ['buy', 'sell'];

    return (
      <SheetWrapper>
        {!authenticated && (
          <OrderFormDisabled>
            로그인이 필요한 서비스입니다.
          </OrderFormDisabled>
        )}
        <Flex>
          {types.map(type => (
            <OrderFormPanel
              key={type}
              form={`order-${type}`}
              onSubmit={e => this.onSubmit(e, type)}
            />
          ))}
        </Flex>
      </SheetWrapper>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.account.authenticated,
});

const mapDispatchToProps = dispatch => ({
  order: payload => dispatch(actions.order(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderForm);
