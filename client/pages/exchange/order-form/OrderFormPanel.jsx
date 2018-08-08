import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm, getFormValues } from 'redux-form';

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
    values,
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
                normalize={(v, pv) => {
                  if (v === '') {
                    return 0; // when input is empty show 0.
                  }

                  const value = v.replace(/^0+[1-9]?/, v.slice(-1)); // normalize cases like 0001 to 1
                  
                  const test = /^\d+(?:\.?)(\d*)/; // NOT ALLOWED CASES: 1.2323.123 | 1.asdf
                  const result = test.exec(value);

                  if (result === null || (result[0].length !== value.length)) {
                    return pv;
                  }

                  if (result[1].length >= 4) { // decimal places exceed 4
                    return parseFloat(value).toFixed(4);
                  }

                  return value;
                }}
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
                  {values ? (values.price * values.amount).toFixed(4) : (0).toFixed(4)}
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

const mapStateToProps = (state, { form }) => ({ values: getFormValues(form)(state) });

export default compose(
  reduxForm({
    initialValues: {
      amount: (1).toFixed(4),
      price: (30).toFixed(4),
    },
  }),
  connect(mapStateToProps),
)(OrderForm);
