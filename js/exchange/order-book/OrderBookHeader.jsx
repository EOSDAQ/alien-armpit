import React from 'react';
import {
  SheetHeader,
  SheetHeading,
} from '../../common/components/molecules/Sheet';

const mockHeadings = ['매도잔량', '시장가', '매수잔량'];

const OrderBookHeader = () => (
  <SheetHeader>
    {
      mockHeadings.map(heading => (
        <SheetHeading>
          <span>
            {heading}
          </span>
        </SheetHeading>
      ))
    }
  </SheetHeader>
);

export default OrderBookHeader;
