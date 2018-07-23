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
  OrderFormInput,
  OrderFormInputControl,
  OrderFormLabel,
} from './OrderFormPanel.styled';
import Input from '../../common/components/atom/Input';
import Icon from '../../common/components/atom/Icon';
import { IconButton } from '../../common/components/atom/Button';

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
        <OrderFormControl>
          <OrderFormLabel htmlFor={priceInputId}>
            가격
            <OrderFormInput>
              <Input type="text" id={priceInputId} />
              <OrderFormInputControl>
                <IconButton small>
                  <Icon type="minus" />
                </IconButton>
                <IconButton small>
                  <Icon type="plus" />
                </IconButton>
              </OrderFormInputControl>
            </OrderFormInput>
          </OrderFormLabel>
        </OrderFormControl>
        <OrderFormControl>
          <OrderFormLabel htmlFor={amountInputId}>
            수량
          </OrderFormLabel>
        </OrderFormControl>
        <OrderFormInput>
          <Input type="text" id={amountInputId} />
          <OrderFormInputControl>
            <IconButton small>
              <Icon type="expand" />
            </IconButton>
          </OrderFormInputControl>
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
    </OrderFormContainer>
  );
};

export default OrderForm;
