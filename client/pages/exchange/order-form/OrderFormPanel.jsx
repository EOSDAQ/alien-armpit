import React from 'react';
import { Field, reduxForm } from 'redux-form';

import {
  OrderFormContainer,
  OrderFormBottom,
  OrderFormTotal,
  OrderFormTotalAmount,
  OrderFormTotalUnit,
  OrderFormButton,
  OrderFormInput,
} from './OrderFormPanel.styled';
import { InputControl } from 'components/atom/Input';
import Box from 'components/atom/Box';

const OrderFormField = ({ input }) => (
  <OrderFormInput {...input} />
);

// TODO. add validation logic.
const OrderForm = (props) => {
  const {
    form,
    handleSubmit,
  } = props;

  const fields = ['price', 'amount'];
  const isBuy = form.indexOf('buy') >= 0;

  return (
    <OrderFormContainer>
      <form onSubmit={handleSubmit}>
        <Box flex={1} p={16}>
          {fields.map(name => (
            <InputControl key={name}>
              <label htmlFor={name}>
                {name}
              </label>
              <Field
                name={name}
                type="number"
                component={OrderFormField}
              />
            </InputControl>
          ))}
        </Box>
        <OrderFormBottom isBuy={isBuy}>
          <OrderFormTotal>
            <label>
              Quantity
              <div>
                <OrderFormTotalAmount>
                  299,588,232
                </OrderFormTotalAmount>
                <OrderFormTotalUnit>
                  {isBuy ? 'SYS' : 'ABC'}
                </OrderFormTotalUnit>
              </div>
            </label>
          </OrderFormTotal>
          <OrderFormButton
            type="submit"
            isBuy={isBuy}
          >
            {`ABC ${isBuy ? '매수' : '매도'}`}
          </OrderFormButton>
        </OrderFormBottom>
      </form>
    </OrderFormContainer>
  );
};

export default reduxForm({})(OrderForm);
