import React from 'react';
// import { connect } from 'react-redux';
// import { actions } from '../reducer/order-form/orderFormReducer';
import {
  TradeContainer,
  TradeBoxTop,
  TradeHeader,
  TradeInput,
  TradeBoxBottom,
  TradeTotal,
  TradeTotalAmount,
  TradeTotalUnit,
  TradeButton,
} from './Exchange.styled';

const ExchangeTradeBox = (props) => {
  const {
    isBuy,
  } = props;

  return (
    <TradeContainer>
      <TradeBoxTop>
        <TradeHeader isBuy={isBuy}>
          {isBuy ? '매수' : '매도'}
        </TradeHeader>
          <TradeInput>
            <label>
              가격
            </label>
            <div>
              <input type="text" />
            </div>
          </TradeInput>
          <TradeInput>
            <label>
              수량
            </label>
            <div>
              <input type="text" />
            </div>
          </TradeInput>
        </TradeBoxTop>
        <TradeBoxBottom isBuy={isBuy}>
          <TradeTotal>
            <label>
              총 거래 금액
            </label>
            <div>
              <TradeTotalAmount>
                299,588,232
              </TradeTotalAmount>
              <TradeTotalUnit>
                EOS
              </TradeTotalUnit>
            </div>
          </TradeTotal>
          <TradeButton
            type="button"
            isBuy={isBuy}
          >
            {`IQ ${isBuy ? '매수' : '매도'}`}
          </TradeButton>
        </TradeBoxBottom>
    </TradeContainer>
  );
};

export default ExchangeTradeBox;
