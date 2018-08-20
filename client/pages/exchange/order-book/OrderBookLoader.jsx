import React from 'react';
import { SheetRow } from 'components/molecules/Sheet';
import { Loader, Wrapper } from './OrderBookLoader.styled';

const OrderBookLoader = () => {
  const list = new Array(16).fill(true);
  return (
    <React.Fragment>
      {list.map((_, i) => (
        <SheetRow 
          key={i}
          columns="1fr 1fr 1fr"
        >
          <Wrapper>
            <Loader
              style={{
                animationDelay: i * 30 + 'ms',
              }}
            />
          </Wrapper>
          <Wrapper>
            <Loader 
              style={{
                animationDelay: i * 30 + 'ms',
              }}
            />
          </Wrapper>
          <Wrapper>
            <Loader 
              style={{
                animationDelay: i * 30 + 'ms',
              }}
            />
          </Wrapper>
        </SheetRow>
      ))}
    </React.Fragment>
  );
}

export default OrderBookLoader;
