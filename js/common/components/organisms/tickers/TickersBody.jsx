import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from '../../../constants/constants';
import { SheetRow } from '../../molecules/Sheet';
import {
  FavoriateCell,
  CoinNameCell,
  CoinNameText,
  CoinCodeText,
  CurrentPriceCell,
  DayChangeCell,
  DayVolumeCell,
  DayVolumeUnitText,
} from './TickersBody.styled';

const TickersBody = (props) => {
  const {
    coinList,
  } = props;
  const scrollStyle = { style: { height: 306 } };
  const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);

  return (
    <Scrollbars {...scrollOptions}>
      { coinList.map((coin, index) => (
        <SheetRow key={coin.coinCode + index}>
          <FavoriateCell favoriate={coin.favoriate} />
          <CoinNameCell>
            <CoinNameText>
              {coin.coinName}
            </CoinNameText>
            <CoinCodeText>
              {coin.coinCode}
            </CoinCodeText>
          </CoinNameCell>
          <CurrentPriceCell>
            {coin.currentPrice}
          </CurrentPriceCell>
          <DayChangeCell>
            {coin.dayChange}
            %
          </DayChangeCell>
          <DayVolumeCell>
            {coin.dayVolume}
            <DayVolumeUnitText>
              백만
            </DayVolumeUnitText>
          </DayVolumeCell>
        </SheetRow>
      ))}
    </Scrollbars>
  );
};

export default TickersBody;