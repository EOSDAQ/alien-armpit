import React from 'react';
import { translate } from 'react-i18next';
import Footer from '../common/components/organisms/Footer';
import Header from '../common/components/organisms/Header';
import CoinListBox from '../common/components/organisms/CoinListBox';
import ExchangeContents from './ExchangeContents';

const Exchange = () => (
  <div>
    <Header />
    <CoinListBox />
    <ExchangeContents />
    <Footer />
  </div>
);

export default translate(['exchange'])(Exchange);
