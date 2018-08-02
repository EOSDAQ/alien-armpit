import React from 'react';
import {
  OrderFormWrapper,
} from './OrderForm.styled';
import OrdeFormPanel from './OrderFormPanel';

const OrderForm = () => {
  return (
    <OrderFormWrapper>
      <OrdeFormPanel isBuy />
      <OrdeFormPanel />
    </OrderFormWrapper>
  );
};

export default OrderForm;
