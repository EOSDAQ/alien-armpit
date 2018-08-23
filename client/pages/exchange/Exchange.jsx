import React from 'react';
import { Redirect, Router, Match } from '@reach/router';
import { translate } from 'react-i18next';
import Socket from 'components/organisms/socket/Socket';
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

class Exchange extends React.PureComponent {
  render() {
    const { code } = this.props;
    return (
      <ExchangeBody>
        <Header />
        <ExchangeContainer large>
          <ExchangeLeftSide>
            <Tickers code={code} />
            <OrderBook code={code} />
          </ExchangeLeftSide>
          <ExchangeRightSide>
            <Sticky>
              {style => (
                <Box
                  style={style}
                  position="sticky"
                >
                  <ExchangeChart code={code} />
                  <ExchangeRightBottom>
                    <OrderForm code={code} />
                  </ExchangeRightBottom>
                </Box>
              )}
            </Sticky>
          </ExchangeRightSide>
        </ExchangeContainer>
        <Footer />
      </ExchangeBody>
    );
  }
}

export default Exchange;
