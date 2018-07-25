import React from 'react';
import { SheetHeader } from '../../molecules/Sheet';
import Tab from '../../molecules/Tab';
import { TickersTab } from './TickersHeader.styled';

const mockTabs = ['EOS', '보유코인'];

const TickersHeader = (props) => {
  const {
    updateSelectedTab,
    selectedTab,
  } = props;

  const selectedIdx = mockTabs.findIndex(t => selectedTab === t);

  return (
    <SheetHeader>
      <Tab selectedIndex={selectedIdx}>
        {
          mockTabs.map((tabId, i) => (
            <TickersTab
              key={tabId}
              role={i === selectedIdx ? 'current' : 'tab'}
              tabIndex={i === selectedIdx ? -1 : 0}
              onKeyDown={(e) => {
                if (e.keyCode === 13) {
                  updateSelectedTab(tabId);
                }
              }}
              onClick={(e) => {
                e.preventDefault();
                updateSelectedTab(tabId);
              }}
            >
              {tabId}
            </TickersTab>
          ))
        }
      </Tab>
    </SheetHeader>
  );
};

export default TickersHeader;
