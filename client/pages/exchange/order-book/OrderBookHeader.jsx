import React from 'react';
import {
  SheetHeader,
  SheetHeading,
  SheetRow,
  SheetHeadingRow,
} from 'components/molecules/Sheet';

const mockHeadings = ['매도잔량', '시장가', '매수잔량'];

const OrderBookHeader = () => (
  <SheetHeader>
    <SheetHeadingRow columns="1fr 1fr 1fr">
      {
        mockHeadings.map(heading => (
          <SheetHeading key={heading}>
            <span>
              {heading}
            </span>
          </SheetHeading>
        ))
      }
    </SheetHeadingRow>
  </SheetHeader>
);

export default OrderBookHeader;
