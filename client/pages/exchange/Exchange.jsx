import React from 'react';
import { Route, Redirect } from 'react-router-dom';
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

const Exchange = ({ match: { params, url }}) => (
  <React.Fragment>
    <Route 
      path={url}
      exact
      render={() => <Redirect to={`${url}/IPOS_SYS`} />}
    />
    <Route 
      path={`${url}/:code`}
      render={() => (
        <ExchangeBody>
          <Header />
          <ExchangeContainer large>
            <ExchangeLeftSide>
              <Tickers />
              <OrderBook />
            </ExchangeLeftSide>
            <ExchangeRightSide>
              <Sticky>
                {style => (
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
                )}
              </Sticky>
            </ExchangeRightSide>
          </ExchangeContainer>
          <Footer />
        </ExchangeBody>
      )}
    />
  </React.Fragment>
);

export default translate(['exchange'])(Exchange);
