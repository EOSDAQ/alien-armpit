import React from 'react';
// import { Sticky, StickyContainer } from 'react-sticky';
import { translate } from 'react-i18next';
import Header from 'components/organisms/header/Header';
import Footer from 'components/organisms/Footer';
import Tickers from 'components/organisms/tickers/Tickers';
import OrderBook from './order-book/OrderBook';
import ExchangeChart from './exchange-chart/ExchangeChart';
import OrderForm from './order-form/OrderForm';
import OrderLog from './order-log/OrderLog';
import {
  ExchangeBody,
  ExchangeContainer,
  ExchangeLeftSide,
  ExchangeRightSide,
  ExchangeRightBottom,
} from './Exchange.styled';
import Sticky from 'components/molecules/Sticky';
import Box from 'components/atom/Box';

const Exchange = () => (
  <ExchangeBody>
    <Header />
    <ExchangeContainer large>
      <ExchangeLeftSide>
        <Tickers />
        <OrderBook />
      </ExchangeLeftSide>
      <ExchangeRightSide>
        <Sticky>
          {(style) => {
            return (
              <Box 
                style={style}
                position="sticky"
              >
                <ExchangeChart />
                <ExchangeRightBottom>
                  <OrderForm />
                  <OrderLog />
                </ExchangeRightBottom>
              </Box>
            );
          }}
        </Sticky>
      </ExchangeRightSide>
    </ExchangeContainer>
    <Footer />
  </ExchangeBody>
);

export default translate(['exchange'])(Exchange);
