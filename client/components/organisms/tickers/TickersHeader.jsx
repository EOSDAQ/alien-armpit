import React from 'react';
import { translate } from 'react-i18next';
import { SheetHeader } from '../../molecules/Sheet';
import Tab from '../../molecules/Tab';
import { TickersTab } from './TickersHeader.styled';
import { tickersTabs } from './tickerConstants';

class TickersHeader extends React.PureComponent {
  render() {
    const {
      t,
      updateSelectedTab,
      selectedTab,
    } = this.props;
    const selectedIdx = tickersTabs.findIndex(tab => selectedTab === tab);
  
    return (
      <SheetHeader>
        <Tab selectedIndex={selectedIdx}>
          {
            tickersTabs.map((tabId, i) => (
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
                {t(`tickers.${tabId}`, { defaultValue: tabId })}
              </TickersTab>
            ))
          }
        </Tab>
      </SheetHeader>
    );
  }
};

export default translate('exchange')(TickersHeader);
