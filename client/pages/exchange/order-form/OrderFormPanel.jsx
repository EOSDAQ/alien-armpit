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
import { toFixed, capitalize } from 'utils/format';

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
    values,
    ticker,
    handleSubmit,
  } = props;

  if (!ticker) {
    return null;
  }

  const token = ticker.coinCode.split('/')[0];

  const fields = ['price', 'amount'];
  const isBuy = form.indexOf('buy') >= 0;
  values = values || 0;

  return (
    <OrderFormContainer>
      <form onSubmit={handleSubmit}>
        <Box flex={1} p={16}>
          {fields.map(name => (
            <InputControl key={name}>
              <label htmlFor={name}>
                {capitalize(name)}
                <span style={{
                  fontSize: 11,
                  color: '#aaa',
                  marginLeft: 4,
                }}>
                  ({ticker.coinCode})
                </span>
              </label>
              <Field
                name={name}
                type="number"
                normalize={v => toFixed(4, v, { appendZero: false })}
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
        </Box>
        <OrderFormBottom isBuy={isBuy}>
          <OrderFormTotal>
            <label>
              Total
              <div>
                <OrderFormTotalAmount>
                  {toFixed(4, values.price * values.amount)}
                </OrderFormTotalAmount>
                <OrderFormTotalUnit>
                  SYS
                </OrderFormTotalUnit>
              </div>
            </label>
          </OrderFormTotal>
          <OrderFormButton
            type="submit"
            isBuy={isBuy}
          >
            {`${token} ${isBuy ? '매수' : '매도'}`}
          </OrderFormButton>
        </OrderFormBottom>
      </form>
    </OrderFormContainer>
  );
};

const mapStateToProps = (state, { form, ...props }) => ({ 
  values: getFormValues(form)(state),
  ...props,
});

export default compose(
  reduxForm({
    initialValues: {
      amount: toFixed(4, 1),
      price: toFixed(4, 30),
    },
  }),
  connect(mapStateToProps),
)(OrderForm);
