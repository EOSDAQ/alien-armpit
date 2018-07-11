import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from '../common/constants/constants';
import { actions } from '../reducer/trade-log/tradeLogReducer';
import {
  ExchangeTradeLogWrapper,
  TradeLogBody,
  TradeLogPrice,
  TradeLogAmount,
  TradeLogTime,
} from './Exchange.styled';
import {
  SheetHeader,
  SheetHeading,
  SheetRow,
} from '../common/components/molecules/Sheet';
import ExchangeTradeLogTab from './ExchangeTradeLogTab';

const mockTabs = ['거래기록', '미체결내역'];
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
  { amount: 242.02, price: 44.10, time: '15:19:51' },
  { amount: 242.02, price: 44.10, time: '15:19:51' },
  { amount: 242.02, price: 44.10, time: '15:19:51' },
];

const ExchangeTradeLog = (props) => {
  const {
    updateTab,
    tab,
  } = props;
  const scrollStyle = { style: { height: 302 } };
  const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);

  return (
    <ExchangeTradeLogWrapper>
      <SheetHeader>
        {
          mockTabs.map(tabId => (
            <ExchangeTradeLogTab
              tabId={tabId}
              handleClickTab={(newTabId) => { updateTab(newTabId); }}
              isSelected={tab === tabId}
            />
          ))
        }
      </SheetHeader>
      <SheetHeader>
        <SheetHeading>
          <span>
            체결량(IQ)
          </span>
        </SheetHeading>
        <SheetHeading>
          <span>
            체결가격
          </span>
        </SheetHeading>
        <SheetHeading>
          <span>
            체결시간
          </span>
        </SheetHeading>
      </SheetHeader>
      <TradeLogBody>
        <Scrollbars {...scrollOptions}>
          {
            mockRows.map(rows => (
              <SheetRow>
                <TradeLogAmount>
                  {rows.amount.toLocaleString()}
                </TradeLogAmount>
                <TradeLogPrice>
                  {rows.price.toFixed(2).toLocaleString()}
                </TradeLogPrice>
                <TradeLogTime>
                  {rows.time}
                </TradeLogTime>
              </SheetRow>
            ))
          }
        </Scrollbars>
      </TradeLogBody>
    </ExchangeTradeLogWrapper>
  );
};

const mapStateToProps = state => ({
  ...state.tradeLog,
});

const mapDispatchToProps = dispatch => ({
  updateTab: (tabId) => { dispatch(actions.updateTab(tabId)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExchangeTradeLog);
