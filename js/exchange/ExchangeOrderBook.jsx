import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from '../common/constants/constants';
import {
  SheetHeader,
  SheetHeading,
} from '../common/components/molecules/Sheet';
import {
  ExchangeOrderBookWrapper,
  OrderBookTradeLog,
  OrderBookTradeLogRow,
  OrderBookTradeLogHeader,
  OrderBookTradeLogCell,
  OrderBookFooterCell,
  OrderBookFooterCellLeft,
  OrderBookFooterCellRight,
} from './Exchange.styled';
import Flex from '../common/components/atom/Flex';
import ExchangeOrderBookTradeInfo from './ExchangeOrderBookTradeInfo';
import ExchangeOrderbookRow from './ExchangeOrderbookRow';

const mockData = {
  maxAmount: 6748.713,
  mockOrderUpSideList: [
    { amount: 6748.713, price: 10200, change: 3.03 },
    { amount: 2011.923, price: 10190, change: 2.93 },
    { amount: 967.379, price: 10180, change: 2.83 },
    { amount: 557.219, price: 10170, change: 2.73 },
    { amount: 267.220, price: 10160, change: 2.63 },
    { amount: 5032.518, price: 10150, change: 2.53 },
    { amount: 1625.930, price: 10140, change: 2.42 },
    { amount: 1983.638, price: 10130, change: 2.32 },
  ],
  mockOrderDownSideList: [
    { amount: 3535.769, price: 10120, change: 2.22 },
    { amount: 2076.738, price: 10110, change: 2.12 },
    { amount: 2022.856, price: 10100, change: 2.02 },
    { amount: 2652.757, price: 10090, change: 1.92 },
    { amount: 4613.628, price: 10080, change: 1.82 },
    { amount: 2240.968, price: 10070, change: 1.72 },
    { amount: 989.422, price: 10060, change: 1.62 },
    { amount: 379.116, price: 10050, change: 1.52 },
  ],
};

const mockHeadings = ['매도잔량', '시장가', '매수잔량'];

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
    <ExchangeOrderBookWrapper>
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
      <Scrollbars {...scrollOptions}>
        <div>
          <Flex>
            <Flex flex={2} flexDirection="column">
              {
                mockData.mockOrderUpSideList.map(orderBunch => (
                  <ExchangeOrderbookRow
                    orderBunch={orderBunch}
                    maxAmount={mockData.maxAmount}
                    isUpside={true}
                  />
                ))
              }
            </Flex>
            <ExchangeOrderBookTradeInfo />
          </Flex>
        </div>
        <div>
          <Flex>
            <OrderBookTradeLog flex={1}>
              <OrderBookTradeLogRow>
                <OrderBookTradeLogHeader>
                  체결가
                </OrderBookTradeLogHeader>
                <OrderBookTradeLogHeader>
                  체결량
                </OrderBookTradeLogHeader>
              </OrderBookTradeLogRow>
              { mockTradeLog.map(log => (
                <OrderBookTradeLogRow>
                  <OrderBookTradeLogCell>
                    {log.price}
                  </OrderBookTradeLogCell>
                  <OrderBookTradeLogCell>
                    {log.amount}
                  </OrderBookTradeLogCell>
                </OrderBookTradeLogRow>
              ))}
            </OrderBookTradeLog>
            <Flex flex={2} flexDirection="column">
              {
                mockData.mockOrderDownSideList.map(orderBunch => (
                  <ExchangeOrderbookRow
                    orderBunch={orderBunch}
                    maxAmount={mockData.maxAmount}
                  />
                ))
              }
            </Flex>
          </Flex>
        </div>
      </Scrollbars>
      <Flex>
        <OrderBookFooterCellLeft>
          <div>
            13,484,601.541
          </div>
        </OrderBookFooterCellLeft>
        <OrderBookFooterCell>
          <div>
            총 잔량
          </div>
        </OrderBookFooterCell>
        <OrderBookFooterCellRight>
          <div>
            13,484,601.541
          </div>
        </OrderBookFooterCellRight>
      </Flex>
    </ExchangeOrderBookWrapper>
  );
};

export default ExchangeOrderBook;
