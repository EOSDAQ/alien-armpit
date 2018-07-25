import React from 'react';
import { Sticky, StickyContainer } from 'react-sticky';
import { translate } from 'react-i18next';
import Header from '../common/components/organisms/header/Header';
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
    <ExchangeContainer large>
      <ExchangeLeftSide>
        <Tickers />
        <OrderBook />
      </ExchangeLeftSide>
      <StickyContainer>
        <ExchangeRightSide>
          <Sticky topOffset={-72}>
            {({ style: _style, distanceFromBottom }) => {
              let style = {
                ..._style,
                top: 72,
              };

              return (
                <div style={style}>
                  <ExchangeChart />
                  <ExchangeRightBottom>
                    <OrderForm />
                    <OrderLog />
                  </ExchangeRightBottom>
                </div>
              );
            }}
          </Sticky>
        </ExchangeRightSide>
      </StickyContainer>
    </ExchangeContainer>
    <Footer />
  </ExchangeBody>
);

export default translate(['exchange'])(Exchange);
