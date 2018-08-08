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
                normalize={(v) => {
                  let value = v;

                  value = value.replace(/[^0-9.]+/g, '');
                  value = value.replace(/^0+?/, ''); // normalize cases like 0001 to 1

                  if (value === '') {
                    value = '0';
                  }

                  if (value.slice(0, 1) === '.') {
                    value = `0${value}`;
                  }

                  const test = /^\d+(?:\.)(\d*)/; // NOT ALLOWED CASES: 1.2323.123 | 1.asdf
                  const result = test.exec(value);

                  if (Array.isArray(result)) {
                    let decimals;
                    [value, decimals] = result;

                    if (decimals.length >= 4) {
                      value = value.slice(0, -decimals.length) + decimals.slice(0, 4);
                    }
                  }
                  return value;
                }}
                onChange={(e, v, pv) => {
                  if (v.length === pv.length) {
                    const fragV = v.split('');
                    const fragPv = pv.split('');
                    const changedIndex = fragV.findIndex((fragment, i) => fragPv[i] !== fragment);
                    if (changedIndex < 0) {
                      // same! 1111.2222 -> 1111.2222
                      const se = e.target.selectionEnd;

                      setTimeout(() => {
                        e.target.setSelectionRange(se, se);
                      }, 0);
                    } else {
                      setTimeout(() => {
                        e.target.setSelectionRange(changedIndex + 1, changedIndex + 1);
                      }, 0);
                    }
                  }
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
