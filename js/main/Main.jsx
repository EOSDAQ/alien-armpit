import React from 'react';
import Footer from '../common/components/organisms/Footer';
import Header from '../common/components/organisms/header/Header';
import MainHolder from './MainHolder';
import MainWallet from './MainWallet';
import MainTransaction from './MainTransaction';
import MainHero from './MainHero';
import MainDashboard from './MainDashboard';
import MainComing from './MainComing';

const Main = () => (
  <div>
    <MainComing />
    <Header />
    <MainDashboard />
    <MainHero />
    <MainWallet />
    <MainTransaction />
    <MainHolder />
    <Footer />
  </div>
);

export default Main;
