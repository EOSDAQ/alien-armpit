import React from 'react';
import { connect } from 'react-redux';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';
import { actions } from 'reducer/account/accountReducer';

class OrderForm extends React.Component {
  onSubmit(values, type) {
    const { order } = this.props;
    order({
      ...values,
      type,
    });
  }

  render() {
    const types = ['buy', 'sell'];

    return (
      <SheetWrapper>
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

const mapDispatchToProps = dispatch => ({
  order: payload => dispatch(actions.order(payload)),
});

export default connect(null, mapDispatchToProps)(OrderForm);
