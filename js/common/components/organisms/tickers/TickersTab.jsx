import React from 'react';
import { Tab } from './TickersTab.styled';

const TickersTab = (props) => {
  const {
    handleClickTab,
    isSelected,
    tabId,
  } = props;

  return (
    <Tab
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
    </Tab>
  );
};

export default TickersTab;
