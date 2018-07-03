import React from 'react';
import { translate } from 'react-i18next';
import Footer from '../common/components/organisms/Footer';
import Header from '../common/components/organisms/Header';
import MainHolder from './MainHolder';
import MainWallet from './MainWallet';
import MainTransaction from './MainTransaction';
import MainHero from './MainHero';
import MainDashboard from './MainDashboard';
import MainComing from './MainComing';

const Main = () => (
  <div>
    <MainDashboard />
    <MainComing />
    <Header />
    <MainHero />
    <MainHolder />
    <MainTransaction />
    <MainWallet />
    <Footer />
  </div>
);

export default translate(['main'])(Main);
