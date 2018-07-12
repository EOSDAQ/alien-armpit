import React from 'react';
import {
  FavoriateHeader,
  CoinNameHeader,
  CurrentPriceHeader,
  DayChangeHeader,
  DayVolumeHeader,
} from './TickersSubHeader.styled';
import { SheetRow } from '../../molecules/Sheet';

const TickersSubHeader = () => (
  <SheetRow>
    <FavoriateHeader />
    <CoinNameHeader>
      코인이름
    </CoinNameHeader>
    <CurrentPriceHeader>
      현재가
    </CurrentPriceHeader>
    <DayChangeHeader>
      전일대비
    </DayChangeHeader>
    <DayVolumeHeader>
      거래량
    </DayVolumeHeader>
  </SheetRow>
);

export default TickersSubHeader;
