import React from 'react';
import { TradeLogTab } from './Exchange.styled';

const ExchangeTradeLogTab = (props) => {
  const {
    handleClickTab,
    isSelected,
    tabId,
  } = props;

  return (
    <TradeLogTab
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
    </TradeLogTab>
  );
};

export default ExchangeTradeLogTab;
