import React from 'react';
import { OrderLogTabWrapper } from './OrderLogTab.styled';

const OrderLogTab = (props) => {
  const {
    handleClickTab,
    isSelected,
    tabId,
  } = props;

  return (
    <OrderLogTabWrapper
      href="#"
      onClick={(e) => {
        e.preventDefault();
        handleClickTab(tabId);
      }}
      isSelected={isSelected}
    >
      <div>
        <span>
          {tabId}
        </span>
      </div>
    </OrderLogTabWrapper>
  );
};

export default OrderLogTab;
