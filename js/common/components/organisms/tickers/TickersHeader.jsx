import React from 'react';
import { SheetHeader } from '../../molecules/Sheet';
import TickersTab from './TickersTab';

const mockTabs = ['EOS', '보유코인'];

const TickersHeader = (props) => {
  const {
    updateTab,
    tab,
  } = props;
  return (
    <SheetHeader>
      {
        mockTabs.map(tabId => (
          <TickersTab
            key={tabId}
            isSelected={tab === tabId}
            handleClickTab={(newTabId) => { updateTab(newTabId); }}
            tabId={tabId}
          />
        ))
      }
    </SheetHeader>
  );
};

export default TickersHeader;
