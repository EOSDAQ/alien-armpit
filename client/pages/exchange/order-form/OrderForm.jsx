import React from 'react';
import OrderFormPanel from './OrderFormPanel';
import Flex from 'components/atom/Flex';
import { SheetWrapper } from 'components/molecules/Sheet';

class OrderForm extends React.Component {
  onSubmit(e, type) {
    console.log(e, type);
  }

  render() {
    const types = ['buy', 'sell'];

    return (
      <SheetWrapper>
        <Flex>
          {types.map(type => (
            <OrderFormPanel
              key={type}
              type={type}
              onSubmit={e => this.onSubmit(e, type)}
            />
          ))}
        </Flex>
      </SheetWrapper>
    );
  }
};

export default OrderForm;
