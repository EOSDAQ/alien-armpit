import React from 'react';
import { translate } from 'react-i18next';
import {
  SheetHeader,
  SheetHeading,
  SheetHeadingRow,
} from 'components/molecules/Sheet';
import { headings } from './orderBookConstants';

const OrderBookHeader = ({ t }) => (
  <SheetHeader>
    <SheetHeadingRow columns="1fr 1fr 1fr">
      {
        headings.map(heading => (
          <SheetHeading key={heading}>
            {t(`orderBook.${heading}`)}
          </SheetHeading>
        ))
      }
    </SheetHeadingRow>
  </SheetHeader>
);

export default translate('exchange')(OrderBookHeader);
