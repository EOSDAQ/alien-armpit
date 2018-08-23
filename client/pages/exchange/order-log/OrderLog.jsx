import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from 'constants/constants';
import { actions } from 'reducer/order-log/orderLogReducer';
import {
  OrderLogWrapper,
  OrderLogPrice,
  OrderLogAmount,
  OrderLogTime,
} from './OrderLog.styled';
import {
  SheetRow,
} from 'components/molecules/Sheet';
import OrderLogHeader from './OrderLogHeader';
import OrderLogSubHeader from './OrderLogSubHeader';
import { Number } from 'components/atom/Text';
import { toFixed } from 'utils/format';


const mockRows = [
  { amount: 20000, price: 44.0023, time: '15:23:12' },
  { amount: 14291, price: 42.0024, time: '15:23:11' },
  { amount: 1000, price: 43.0025, time: '15:23:02' },
  { amount: 8165.22, price: 44.1230, time: '15:23:01' },
  { amount: 998.26, price: 44.0420, time: '15:20:48' },
  { amount: 4770.15, price: 44.2110, time: '15:20:44' },
  { amount: 7111, price: 44.6510, time: '15:20:18' },
  { amount: 430.78, price: 44.1260, time: '15:19:58' },
  { amount: 242.02, price: 44.9220, time: '15:19:51' },
  { amount: 242.02, price: 45.1230, time: '15:19:50' },
  { amount: 242.02, price: 46.0, time: '15:19:49' },
  { amount: 242.02, price: 42.1230, time: '15:19:48' },
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
      <Scrollbars {...scrollOptions}>
        {
          mockRows.map(rows => (
            <SheetRow
              key={rows.time}
              columns="1fr 1fr 1fr"
            >
              <OrderLogAmount>
                <Number>
                  {toFixed(4, rows.amount).toLocaleString()}
                </Number>
              </OrderLogAmount>
              <OrderLogPrice>
                <Number>
                  {toFixed(4, rows.price).toLocaleString()}
                </Number>
              </OrderLogPrice>
              <OrderLogTime>
                {rows.time}
              </OrderLogTime>
            </SheetRow>
          ))
        }
      </Scrollbars>
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
