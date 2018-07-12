import React from 'react';
import {
  SheetHeader,
  SheetHeading,
} from '../../common/components/molecules/Sheet';

const OrderLogSubHeader = () => (
  <SheetHeader>
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
  </SheetHeader>
);

export default OrderLogSubHeader;
