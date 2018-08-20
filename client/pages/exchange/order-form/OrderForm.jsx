import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';
import { actions } from 'reducer/account/accountReducer';
import { OrderFormDisabled } from './OrderForm.styled';

class OrderForm extends React.Component {
  onSubmit(values, type) {
    const { order, ticker } = this.props;
    const coinCode = ticker.coinCode.split('/')[0];

    order({
      ...values,
      type,
      coinCode,
    });
  }

  render() {
    const { authenticated, ticker } = this.props;
    const types = ['buy', 'sell'];
                                      
    return (
      <SheetWrapper>
        {!authenticated && <OrderFormDisabled />}
        <Flex>
          {types.map(type => (
            <OrderFormPanel
              key={type}
              form={`order-${type}`}
              ticker={ticker}
              onSubmit={e => this.onSubmit(e, type)}
            />
          ))}
        </Flex>
      </SheetWrapper>
    );
  }
}

const mapStateToProps = (state, { match: { params }}) => ({
  authenticated: state.account.authenticated,
  ticker: state.tickers.box.coinList.filter(c =>
    c.coinCode.replace('/', '_') === params.coinCode
  )[0],
});

const mapDispatchToProps = dispatch => ({
  order: payload => dispatch(actions.order(payload)),
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderForm));
