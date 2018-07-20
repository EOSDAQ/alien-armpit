import React from 'react';
import {
  SheetHeader,
  SheetHeading,
  SheetHeadingRow,
} from '../../common/components/molecules/Sheet';

const OrderLogSubHeader = () => (
  <SheetHeader>
    <SheetHeadingRow
      columns="1fr 1fr 1fr"
    >
      <SheetHeading>
        <span>
          체결량(IQ)
        </span>
      </SheetHeading>
      <SheetHeading>
        <span>
          체결가격
        </span>
      </SheetHeading>
      <SheetHeading>
        <span>
          체결시간
        </span>
      </SheetHeading>
    </SheetHeadingRow>
  </SheetHeader>
);

export default OrderLogSubHeader;
