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
} from './OrderFormPanel.styled';
import Input, { InputControl } from 'components/atom/Input';
import Box from 'components/atom/Box';

// TODO. add validation logic.
const OrderForm = (props) => {
  const {
    isBuy,
    handleSubmit,
  } = props;

  const fields = ['price', 'amount'];

  return (
    <OrderFormContainer>
      <form onSubmit={handleSubmit}>
        <Box flex="1" py={32} pb={16}>
          {fields.map(name => (
            <InputControl key={name}>
              <label htmlFor={name}>
                {name}
              </label>
              <Field
                name={name}
                type="number"
                component={({ input, ...inputProps }) => <Input {...input} {...inputProps} />}
              />
            </InputControl>
          ))}
        </Box>
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
            type="submit"
            isBuy={isBuy}
          >
            {`IQ ${isBuy ? '매수' : '매도'}`}
          </OrderFormButton>
        </OrderFormBottom>
      </form>
    </OrderFormContainer>
  );
};

export default reduxForm({})(OrderForm);
