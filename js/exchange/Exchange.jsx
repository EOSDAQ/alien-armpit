import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { translate } from 'react-i18next';
import Header from '../common/components/organisms/Header';
import Footer from '../common/components/organisms/Footer';
import Tickers from '../common/components/organisms/tickers/Tickers';
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

const Exchange = () => (
  <ExchangeBody>
    <Header />
    <StickyContainer>
      <ExchangeContainer>
        <ExchangeLeftSide>
          <Tickers />
          <OrderBook />
        </ExchangeLeftSide>
        <ExchangeRightSide>
          <Sticky>
            {({ style }) => {
              console.log(style);
              return (
                <div style={style}>
                  <ExchangeChart />
                  <ExchangeRightBottom>
                    <OrderForm />
                    <OrderLog />
                  </ExchangeRightBottom>
                </div>
              )
            }}
          </Sticky>
        </ExchangeRightSide>
      </ExchangeContainer>
    </StickyContainer>
    <Footer />
  </ExchangeBody>
);

export default translate(['exchange'])(Exchange);
