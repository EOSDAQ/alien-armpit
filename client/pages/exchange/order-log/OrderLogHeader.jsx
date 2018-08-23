import React from 'react';
import { translate } from 'react-i18next';
import { SheetHeader } from 'components/molecules/Sheet';
import Tab from 'components/molecules/Tab';
import { OrderLogTab } from './OrderLogHeader.stlyed';
import { orderLogTabs } from './orderLogConstants';

const OrderLogHeader = (props) => {
  const {
    tab,
    updateTab,
    t,
  } = props;

  const selectedIndex = orderLogTabs.findIndex(t => t === tab);

  return (
    <SheetHeader>
      <Tab selectedIndex={selectedIndex}>
        {
          orderLogTabs.map(tabId => (
            <OrderLogTab
              key={tabId}
              onClick={() => { updateTab(tabId); }}
            >
              {t(`orderLog.${tabId}`)}
            </OrderLogTab>
          ))
        }
      </Tab>
    </SheetHeader>
  );
};

export default translate('exchange')(OrderLogHeader);
