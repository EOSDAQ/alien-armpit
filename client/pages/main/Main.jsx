import React from 'react';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/header/Header';
import MainHolder from './MainHolder';
import MainWallet from './MainWallet';
import MainTransaction from './MainTransaction';
import MainHero from './MainHero';
import MainDashboard from './MainDashboard';
import MainComing from './MainComing';
import Curtain from 'components/molecules/Curtain';

const Main = () => (
  <Curtain condition="signinWithOtpReverse">
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
  </Curtain>
);

export default Main;
