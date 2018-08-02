import React from 'react';
import { SheetHeader } from 'components/molecules/Sheet';
import Tab from 'components/molecules/Tab';
import { OrderLogTab } from './OrderLogHeader.stlyed';

const mockTabs = ['거래기록', '미체결내역'];

const OrderLogHeader = (props) => {
  const {
    tab,
    updateTab,
  } = props;

  const selectedIndex = mockTabs.findIndex(t => t === tab);

  return (
    <SheetHeader>
      <Tab selectedIndex={selectedIndex}>
        {
          mockTabs.map(tabId => (
            <OrderLogTab
              key={tabId}
              onClick={() => { updateTab(tabId); }}
            >
              {tabId}
            </OrderLogTab>
          ))
        }
      </Tab>
    </SheetHeader>
  );
};

export default OrderLogHeader;
