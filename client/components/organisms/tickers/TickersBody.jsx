import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from 'constants/constants';
import {
  FavoriteCell,
  CoinNameCell,
  CoinNameText,
  CoinCodeText,
  CurrentPriceCell,
  DayChangeCell,
  DayVolumeCell,
  DayVolumeUnitText,
  CoinIcon,
  TickersRow,
} from './TickersBody.styled';
import Icon from '../../atom/Icon';
import { IconButton } from '../../atom/Button';
import { actions } from 'reducer/tickers/tickersReducer';
import { SheetRow } from '../../molecules/Sheet';
import { tickersSheetRowColumns } from 'components/styleConstants';

const toMillion = (number) => {
  const value = (number / 1.0e+6).toString();
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

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
          <TickersRow
            key={coin.coinCode}
            columns={tickersSheetRowColumns}
          >
            <FavoriteCell>
              <IconButton onClick={() => { toggleFavorite(coin.coinCode); }}>
                <Icon type={coin.favorite ? 'starred' : 'star'} />
              </IconButton>
            </FavoriteCell>
            <CoinNameCell>
              <CoinIcon url={coin.coinIconUrl} />
              <Link // TODO. prevent history being pushed when it is active.
                to={`/exchange/${coin.coinCode.replace('/', '_')}`}
              >
                <CoinNameText>
                  {coin.coinName}
                </CoinNameText>
                <CoinCodeText>
                  {coin.coinCode}
                </CoinCodeText>
              </Link>
            </CoinNameCell>
            <CurrentPriceCell buy={buy}>
              {coin.currentPrice.toFixed(4)}
            </CurrentPriceCell>
            <DayChangeCell buy={buy}>
              {coin.dayChange}
              %
            </DayChangeCell>
            <DayVolumeCell>
              {toMillion(coin.dayVolume)}
              <DayVolumeUnitText>
                백만
              </DayVolumeUnitText>
            </DayVolumeCell>
          </TickersRow>
        );
      })}
    </Scrollbars>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (coinCode) => { dispatch(actions.toggleFavorite({ coinCode })); },
});

export default connect(
  null,
  mapDispatchToProps,
)(TickersBody);
