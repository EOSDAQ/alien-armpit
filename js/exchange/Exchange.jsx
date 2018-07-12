import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { translate } from 'react-i18next';
import Box from '../common/components/atom/Box';
import Flex from '../common/components/atom/Flex';
import Header from '../common/components/organisms/Header';
import Footer from '../common/components/organisms/Footer';
import TickersBox from '../common/components/organisms/TickersBox';
import OrderBook from './order-book/OrderBook';
import ExchangeChartBox from './ExchangeChartBox';
import ExchangeTradeBox from './ExchangeTradeBox';
import ExchangeTradeLog from './ExchangeTradeLog';
import {
  ExchangeBody,
  ExchangeContainer,
  ExchangeLeftSide,
  ExchangeRightSide,
  ExchangeRightBottom,
  ExchangeTradeBoxWrapper,
} from './Exchange.styled';

const Exchange = () => (
  <ExchangeBody>
    <Header />
    <StickyContainer>
      <ExchangeContainer>
        <ExchangeLeftSide>
          <TickersBox />
          <OrderBook />
        </ExchangeLeftSide>
        <ExchangeRightSide>
          <Sticky>
            {({ style }) => (
              <div style={style}>
                <ExchangeChartBox />
                <ExchangeRightBottom>
                  <ExchangeTradeBoxWrapper>
                    <ExchangeTradeBox isBuy={true} />
                    <ExchangeTradeBox />
                  </ExchangeTradeBoxWrapper>
                  <ExchangeTradeLog />
                </ExchangeRightBottom>
              </div>
            )}
          </Sticky>
        </ExchangeRightSide>
      </ExchangeContainer>
    </StickyContainer>
    <Footer />
  </ExchangeBody>
);

export default translate(['exchange'])(Exchange);
