import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from '../../common/constants/constants';
import { actions } from '../../reducer/order-log/orderLogReducer';
import {
  OrderLogWrapper,
  OrderLogBody,
  OrderLogPrice,
  OrderLogAmount,
  OrderLogTime,
} from './OrderLog.styled';
import {
  SheetRow,
} from '../../common/components/molecules/Sheet';
import OrderLogHeader from './OrderLogHeader';
import OrderLogSubHeader from './OrderLogSubHeader';


const mockRows = [
  { amount: 20000, price: 12244.00, time: '15:23:12' },
  { amount: 14291, price: 44.10, time: '15:23:11' },
  { amount: 1000, price: 44.10, time: '15:23:02' },
  { amount: 8165.22, price: 44.10, time: '15:23:01' },
  { amount: 998.26, price: 44.00, time: '15:20:48' },
  { amount: 4770.15, price: 44.10, time: '15:20:44' },
  { amount: 7111, price: 44.10, time: '15:20:18' },
  { amount: 430.78, price: 44.10, time: '15:19:58' },
  { amount: 242.02, price: 44.10, time: '15:19:51' },
  { amount: 242.02, price: 44.10, time: '15:19:50' },
  { amount: 242.02, price: 44.10, time: '15:19:49' },
  { amount: 242.02, price: 44.10, time: '15:19:48' },
];

const OrderLog = (props) => {
  const {
    updateTab,
    tab,
  } = props;
  const scrollStyle = { style: { height: 302 } };
  const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);

  return (
    <OrderLogWrapper>
      <OrderLogHeader
        tab={tab}
        updateTab={updateTab}
      />
      <OrderLogSubHeader />
      <OrderLogBody>
        <Scrollbars {...scrollOptions}>
          {
            mockRows.map(rows => (
              <SheetRow key={rows.time}>
                <OrderLogAmount>
                  {rows.amount.toLocaleString()}
                </OrderLogAmount>
                <OrderLogPrice>
                  {rows.price.toFixed(2).toLocaleString()}
                </OrderLogPrice>
                <OrderLogTime>
                  {rows.time}
                </OrderLogTime>
              </SheetRow>
            ))
          }
        </Scrollbars>
      </OrderLogBody>
    </OrderLogWrapper>
  );
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
