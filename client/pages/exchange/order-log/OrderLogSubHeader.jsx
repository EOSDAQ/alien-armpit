import React from 'react';
import { translate } from 'react-i18next';
import {
  SheetHeader,
  SheetHeading,
  SheetHeadingRow,
} from 'components/molecules/Sheet';

const OrderLogSubHeader = ({ t }) => (
  <SheetHeader>
    <SheetHeadingRow
      columns="1fr 1fr 1fr"
    >
      <SheetHeading>
        <span>
          {t('orderLog.volume')}(IQ)
        </span>
      </SheetHeading>
      <SheetHeading>
        <span>
          {t('orderLog.price')}
        </span>
      </SheetHeading>
      <SheetHeading>
        <span>
          {t('orderLog.time')}
        </span>
      </SheetHeading>
    </SheetHeadingRow>
  </SheetHeader>
);

export default translate('exchange')(OrderLogSubHeader);
