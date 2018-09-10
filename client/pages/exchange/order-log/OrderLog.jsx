import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from 'constants/constants';
import { actions } from 'reducer/order-log/orderLogReducer';
import {
  OrderLogWrapper,
} from './OrderLog.styled';

import OrderLogHeader from './OrderLogHeader';
import OrderLogSubHeader from './OrderLogSubHeader';
import TradeHistory from './tradeHistory/TradeHistory';
import OpenOrders from './openOrders/OpenOrders';

class OrderLog extends React.PureComponent {
  renderTabContent() {
    const { tab, code } = this.props;
    const [symbol] = code.split('_');
    if (tab === 'tradeHistory') {
      return <TradeHistory symbol={symbol} />;
    }
    return <OpenOrders symbol={symbol} listType={tab} />;
  }

  render() {
    const {
      updateTab,
      tab,
    } = this.props;
    const scrollStyle = { style: { height: 302 } };
    const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);

    return (
      <OrderLogWrapper>
        <OrderLogHeader
          tab={tab}
          updateTab={updateTab}
        />
        <OrderLogSubHeader />
        <Scrollbars {...scrollOptions}>
          {this.renderTabContent()}
        </Scrollbars>
      </OrderLogWrapper>
    );
  }
};

const mapStateToProps = state => ({
  ...state.orderLog,
});

const mapDispatchToProps = dispatch => ({
  updateTab: (tabId) => { dispatch(actions.updateTab(tabId)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(OrderLog);
