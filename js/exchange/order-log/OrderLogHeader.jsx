import React from 'react';
import { SheetHeader } from '../../common/components/molecules/Sheet';
import OrderLogTab from './OrderLogTab';

const mockTabs = ['거래기록', '미체결내역'];

const OrderLogHeader = (props) => {
  const {
    tab,
    updateTab,
  } = props;
  return (
    <SheetHeader>
      {
        mockTabs.map(tabId => (
          <OrderLogTab key={tabId}
            tabId={tabId}
            handleClickTab={(newTabId) => { updateTab(newTabId); }}
            isSelected={tab === tabId}
          />
        ))
      }
    </SheetHeader>
  );
};

export default OrderLogHeader;
