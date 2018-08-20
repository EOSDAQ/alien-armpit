import React from 'react';
import { Field, reduxForm, change } from 'redux-form';

import {
  OrderFormContainer,
  OrderFormButton,
  OrderFormInput,
  OrderFormAction,
} from './OrderFormPanel.styled';
import { InputControl } from 'components/atom/Input';
import Box from 'components/atom/Box';
import { toFixed, capitalize } from 'utils/format';
import { Code } from 'components/atom/Text';

const OrderFormField = ({ input }) => (
  <OrderFormInput 
    {...input}
    autoComplete="off"
  />
);

// TODO. add validation logic.
const OrderForm = (props) => {
  let {
    form,
    token,
    dispatch,
    handleSubmit,
  } = props;

  if (!token) {
    return null;
  }

  const { symbol, baseSymbol } = token;

  const fields = ['price', 'amount'];
  const isBuy = form.indexOf('buy') >= 0;

  return (
    <OrderFormContainer>
      <form onSubmit={handleSubmit}>
        <Box flex={1} p={12}>
          {fields.map(name => (
            <InputControl key={name}>
              <label htmlFor={name}>
                {capitalize(name)}
                <span style={{
                  fontSize: 11,
                  color: '#aaa',
                  marginLeft: 4,
                }}>
                  <Code>
                    {name === 'price' ? symbol + '/' + baseSymbol : symbol}
                  </Code>
                </span>
              </label>
              <Field
                name={name}
                type="number"
                normalize={(v, pv, { amount, price }) => {
                  dispatch(change(
                    form,
                    'total',
                    toFixed(4, amount * price),
                  ));

                  return toFixed(4, v, { appendZero: false })}
                }
                onChange={(e) => {
                  const pos = e.target.selectionEnd;

                  setTimeout(() => {
                    e.target.setSelectionRange(pos, pos);
                  }, 0);
                }}
                component={OrderFormField}
              />
            </InputControl>
          ))}
          <InputControl>
            <label>
              Total
              <span style={{
                fontSize: 11,
                color: '#aaa',
                marginLeft: 4,
              }}>
                <Code>
                  {baseSymbol}
                </Code>
              </span>
            </label>
            <Field
              name="total"
              type="number"
              normalize={(v, pv, allv) => {
                const { total, price } = allv;
                dispatch(change(
                  form, 
                  'amount',
                  toFixed(4, total / price),
                ));
                return toFixed(4, v, { appendZero: false })}
              }
              onChange={(e) => {
                const pos = e.target.selectionEnd;

                setTimeout(() => {
                  e.target.setSelectionRange(pos, pos);
                }, 0);
              }}
              component={OrderFormField}
            />
          </InputControl>
        </Box>
        <OrderFormAction>
          <OrderFormButton
            type="submit"
            small
            isBuy={isBuy}
          >
            {`${symbol} ${isBuy ? '매수' : '매도'}`}
          </OrderFormButton>
        </OrderFormAction>
      </form>
    </OrderFormContainer>
  );
};

export default reduxForm({
  initialValues: {
    amount: toFixed(4, 1),
    price: toFixed(4, 30),
    total: toFixed(4, 30),
  },
})(OrderForm);
