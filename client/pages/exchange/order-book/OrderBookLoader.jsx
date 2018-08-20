import React from 'react';
import { SheetRow } from 'components/molecules/Sheet';
import { Loader, Wrapper } from './OrderBookLoader.styled';

const OrderBookLoader = () => {
  const list = new Array(16).fill(true);
  return (
    <React.Fragment>
      {list.map((_, i) => (
        <div
          key={i}
          style={{
            background: '#f4f4f4',
            position: 'relative',
          }}
        >
          <SheetRow 
            columns="1fr 1fr 1fr"
          >
            <Wrapper />
            <Wrapper />
            <Wrapper />
          </SheetRow>
          <Loader>
          </Loader>
        </div>
      ))}
    </React.Fragment>
  );
}

export default OrderBookLoader;
