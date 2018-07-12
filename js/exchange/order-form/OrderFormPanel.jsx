import React from 'react';

import {
  OrderFormContainer,
  OrderFormTop,
  OrderFormHeader,
  OrderFormControl,
  OrderFormBottom,
  OrderFormTotal,
  OrderFormTotalAmount,
  OrderFormTotalUnit,
  OrderFormButton,
} from './OrderFormPanel.styled';

const OrderForm = (props) => {
  const {
    isBuy,
  } = props;
  const actionStr = isBuy ? 'buy' : 'sell';
  const priceInputId = `price_input_for_${actionStr}`;
  const amountInputId = `amout_input_for_${actionStr}`;

  return (
    <OrderFormContainer>
      <OrderFormTop>
        <OrderFormHeader isBuy={isBuy}>
          {isBuy ? '매수' : '매도'}
        </OrderFormHeader>
        <OrderFormControl>
          <label htmlFor={priceInputId}>
            가격
            <div>
              <input type="text" id={priceInputId} />
            </div>
          </label>
        </OrderFormControl>
        <OrderFormControl>
          <label htmlFor={amountInputId}>
            수량
            <div>
              <input type="text" />
            </div>
          </label>
        </OrderFormControl>
      </OrderFormTop>
      <OrderFormBottom isBuy={isBuy}>
        <OrderFormTotal>
          <label>
            총 거래 금액
            <div>
              <OrderFormTotalAmount>
                299,588,232
              </OrderFormTotalAmount>
              <OrderFormTotalUnit>
                EOS
              </OrderFormTotalUnit>
            </div>
          </label>
        </OrderFormTotal>
        <OrderFormButton
          type="button"
          isBuy={isBuy}
        >
          {`IQ ${isBuy ? '매수' : '매도'}`}
        </OrderFormButton>
      </OrderFormBottom>
    </OrderFormContainer>
  );
};

export default OrderForm;
