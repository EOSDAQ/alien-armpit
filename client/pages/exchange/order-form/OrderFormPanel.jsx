import React from 'react';
import { connect } from 'react-redux';

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
import Form from 'components/molecules/Form';

const OrderFormField = ({ input }) => (
  <OrderFormInput 
    {...input}
    autoComplete="off"
  />
);

const initialValues = {
  amount: toFixed(4, 1),
  price: toFixed(4, 30),
  total: toFixed(4, 30),
};

const OrderForm = (props) => {
  let {
    type,
    symbol,
    baseSymbol,
    order,
    token,
  } = props;

  const fields = ['price', 'amount'];

  return (
    <OrderFormContainer>
      <Form
        onSubmit={(values) => {
          order({
            ...values,
            type,
            token,
            symbol,
          })
        }}
        initialValues={initialValues}
      >
        {({ setValues, values }) => {
          return (
            <React.Fragment>
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
                    <OrderFormInput
                      name={name}
                      value={values[name]}
                      onChange={(e) => {
                        const target = e.target;
                        const pos = e.target.selectionEnd;
                        const { value } = e.target;
                        const otherKey = name === 'price' ? 'amount' : 'price';
                        setValues({
                          [name]: toFixed(4, value, { appendZero: false }),
                          total: toFixed(4, values[otherKey] * value)
                        });

                        setTimeout(() => {
                          target.setSelectionRange(pos, pos);
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
                  <OrderFormInput
                    name="total"
                    value={values.total}
                    onChange={(e) => {
                      const target = e.target;
                      const pos = e.target.selectionEnd;

                      setValues({
                        total: toFixed(4, e.target.value, { appendZero: false }),
                        amount: toFixed(4, e.target.value / values.price),
                      });

                      setTimeout(() => {
                        target.setSelectionRange(pos, pos);
                      }, 0);
                    }}
                  />
                </InputControl>
              </Box>
              <OrderFormAction>
                <OrderFormButton
                  type="submit"
                  small
                  isAsk={type === 'ask'}
                >
                  {`${symbol} ${type === 'ask' ? '매도' : '매수'}`}
                </OrderFormButton>
              </OrderFormAction>
            </React.Fragment>
          )
        }}
      </Form>
    </OrderFormContainer>
  );
};

export default OrderForm;
