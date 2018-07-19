import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from '../../../constants/constants';
import { SheetRow } from '../../molecules/Sheet';
import {
  FavoriteCell,
  CoinNameCell,
  CoinNameText,
  CoinCodeText,
  CurrentPriceCell,
  DayChangeCell,
  DayVolumeCell,
  DayVolumeUnitText,
} from './TickersBody.styled';
import Icon from '../../atom/Icon';
import { IconButton } from '../../atom/Button';
import { actions } from '../../../../reducer/tickers/tickersReducer';

const TickersBody = (props) => {
  const {
    coinList,
    toggleFavorite,
  } = props;

  const scrollStyle = { style: { height: 306 } };
  const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);
  return (
    <Scrollbars {...scrollOptions}>
      {coinList.map((coin) => {
        const buy = coin.dayChange > 0;

        return (
          <SheetRow key={coin.coinCode}>
            <FavoriteCell>
              <IconButton onClick={() => { toggleFavorite(coin.coinCode); }}>
                <Icon type={coin.favorite ? 'starred' : 'star'} />
              </IconButton>
            </FavoriteCell>
            <CoinNameCell>
              <CoinNameText>
                {coin.coinName}
              </CoinNameText>
              <CoinCodeText>
                {coin.coinCode}
              </CoinCodeText>
            </CoinNameCell>
            <CurrentPriceCell buy={buy}>
              {coin.currentPrice}
            </CurrentPriceCell>
            <DayChangeCell buy={buy}>
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
        );
      })}
    </Scrollbars>
  );
};

const mapStateToProps = (state, props) => ({
  coins: props.coins,
});

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (coinCode) => { dispatch(actions.toggleFavorite({ coinCode })); },
});

export default connect(
  null,
  mapDispatchToProps,
)(TickersBody);
