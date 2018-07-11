import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { translate } from 'react-i18next';
import Box from '../common/components/atom/Box';
import Flex from '../common/components/atom/Flex';
import Header from '../common/components/organisms/Header';
import Footer from '../common/components/organisms/Footer';
import TickersBox from '../common/components/organisms/TickersBox';
import ExchangeOrderBook from './ExchangeOrderBook';
import ExchangeChartBox from './ExchangeChartBox';
import ExchangeTradeBox from './ExchangeTradeBox';
import ExchangeTradeLog from './ExchangeTradeLog';
import {
  ExchangeBody,
  ExchangeLeftSideWrap,
  ExchangeTradeBoxWrapper,
} from './Exchange.styled';
import {
  bottomBlanks,
} from './Exchange.styled.constants';

const Exchange = () => (
  <ExchangeBody>
    <Header />
    <StickyContainer>
      <Flex
        width={1280}
        ml="auto"
        mr="auto"
        pt={24}
        pb={bottomBlanks}
      >
        <ExchangeLeftSideWrap>
          <TickersBox />
          <ExchangeOrderBook />
        </ExchangeLeftSideWrap>
        <Flex width={740}>
          <Sticky>
            {({ style }) => (
              <div style={style}>
                <ExchangeChartBox />
                <Flex width={740} mt={12} >
                  <ExchangeTradeBoxWrapper>
                    <ExchangeTradeBox isBuy={true} />
                    <ExchangeTradeBox />
                  </ExchangeTradeBoxWrapper>
                  <ExchangeTradeLog />
                </Flex>
              </div>
            )}
          </Sticky>
        </Flex>
      </Flex>
    </StickyContainer>
    <Footer />
  </ExchangeBody>
);

export default translate(['exchange'])(Exchange);
