import React from 'react';
import {
  SheetHeader,
  SheetHeading,
  SheetRow,
} from '../../common/components/molecules/Sheet';

const mockHeadings = ['매도잔량', '시장가', '매수잔량'];

const OrderBookHeader = () => (
  <SheetHeader>
    <SheetRow columns="1fr 1fr 1fr">
      {
        mockHeadings.map(heading => (
          <SheetHeading key={heading}>
            <span>
              {heading}
            </span>
          </SheetHeading>
        ))
      }
    </SheetRow>
  </SheetHeader>
);

export default OrderBookHeader;
