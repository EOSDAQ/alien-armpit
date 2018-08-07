import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  OrderFormContainer,
  OrderFormTop,
  OrderFormControl,
  OrderFormBottom,
  OrderFormTotal,
  OrderFormTotalAmount,
  OrderFormTotalUnit,
  OrderFormButton,
  OrderFormInput,
} from './OrderFormPanel.styled';
import { InputControl } from 'components/atom/Input';

const OrderForm = (props) => {
  const {
    isBuy,
    handleSubmit,
  } = props;
  const actionStr = isBuy ? 'buy' : 'sell';
  const priceInputId = `price_input_for_${actionStr}`;
  const amountInputId = `amout_input_for_${actionStr}`;

  console.log(handleSubmit);
  return (
    <OrderFormContainer>
      <form onSubmit={handleSubmit}>
      <OrderFormTop>
        <OrderFormControl>
          <InputControl>
            <label htmlFor={priceInputId}>
              가격
              <OrderFormInput id={priceInputId} type="number" />
            </label>
          </InputControl>
        </OrderFormControl>
        <OrderFormControl>
          <InputControl>
            <label htmlFor={amountInputId}>
              수량
            </label>
          </InputControl>
        </OrderFormControl>
        <OrderFormInput>
        </OrderFormInput>
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
      </form>
    </OrderFormContainer>
  );
};

export default reduxForm({
  form: 'order',
})(OrderForm);
