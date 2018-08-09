import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from 'constants/constants';

import {
  OrderBookWrapper,
} from './OrderBook.styled';
import Flex from 'components/atom/Flex';
import OrderBookHeader from './OrderBookHeader';
import OrderBookList from './OrderBookList';
import OrderBookTradeInfo from './OrderBookTradeInfo';
import OrderBookTradeLog from './OrderBookTradeLog';
import OrderBookFooter from './OrderBookFooter';


const mockData = {
  orderUpSideList: [
    { amount: 6748.713, price: 10200, change: 1.03 },
    { amount: 2011.923, price: 10190, change: 0.93 },
    { amount: 967.379, price: 10180, change: 0.83 },
    { amount: 557.219, price: 10170, change: 0.73 },
    { amount: 267.220, price: 10160, change: 0.63 },
    { amount: 5032.518, price: 10150, change: 0.53 },
    { amount: 1625.930, price: 10140, change: 0.42 },
    { amount: 1983.638, price: 10130, change: 0.00 },
  ],
  orderDownSideList: [
    { amount: 3535.769, price: 10120, change: -.22 },
    { amount: 2076.738, price: 10110, change: -.32 },
    { amount: 2022.856, price: 10100, change: -1.02 },
    { amount: 2652.757, price: 10090, change: -1.12 },
    { amount: 4613.628, price: 10080, change: -1.22 },
    { amount: 2240.968, price: 10070, change: -1.32 },
    { amount: 989.422, price: 10060, change: -1.62 },
    { amount: 379.116, price: 10050, change: -1.572 },
  ],
};

const mockTradeLog = [
  { price: 43.90, amount: 99226.283 },
  { price: 43.90, amount: 67160.079 },
  { price: 43.80, amount: 773.717 },
  { price: 43.80, amount: 56632.079 },
  { price: 43.80, amount: 21970.564 },
  { price: 43.80, amount: 100.000 },
  { price: 44.00, amount: 4171.122 },
  { price: 44.00, amount: 22767.659 },
  { price: 44.00, amount: 10000.000 },
];

const ExchangeOrderBook = () => {
  const scrollStyle = { style: { height: 512 } };
  const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);
  return (
    <OrderBookWrapper>
      <OrderBookHeader />
      <Scrollbars {...scrollOptions}>
        <Flex>
          <OrderBookList
            orderList={mockData.orderUpSideList}
            maxAmount={6748.713}
            isUpside
          />
          <OrderBookTradeInfo />
        </Flex>
        <Flex>
          <OrderBookTradeLog tradeLogList={mockTradeLog} />
          <OrderBookList
            orderList={mockData.orderDownSideList}
            maxAmount={6748.713}
          />
        </Flex>
      </Scrollbars>
      <OrderBookFooter />
    </OrderBookWrapper>
  );
};

export default ExchangeOrderBook;
