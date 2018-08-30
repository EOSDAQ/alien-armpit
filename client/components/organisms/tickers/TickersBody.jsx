import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
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
import ChangeDetector from 'components/molecules/ChangeDetector';
import Icon from '../../atom/Icon';
import { IconButton } from '../../atom/Button';
import { actions } from 'reducer/tokens/tokensReducer';
import { tickersSheetRowColumns } from 'components/styleConstants';
import { toFixed } from 'utils/format';

const toMillion = (number) => {
  const value = (number / 1.0e+6).toString();
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const TickersBody = (props) => {
  const {
    tokens,
    toggleFavorite,
    t,
  } = props;

  const scrollStyle = { style: { height: 360 } };
  const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);
  const million = t('million');

  return (
    <Scrollbars {...scrollOptions}>
      {tokens.map((token) => {
        const buy = token.dayChange > 0;
        const currentPrice = toFixed(4, token.currentPrice / 1000);

        return (
          <TickersRow
            key={token.pair}
            columns={tickersSheetRowColumns}
          >
            <FavoriteCell>
              <IconButton onClick={() => { toggleFavorite(token.pair); }}>
                <Icon type={token.favorite ? 'starred' : 'star'} />
              </IconButton>
            </FavoriteCell>
            <CoinNameCell>
              <CoinIcon url={token.coinIconUrl} />
              <Link // TODO. prevent history being pushed when it is active.
                to={`/exchange/${token.pair}`}
              >
                <CoinNameText>
                  {token.name}
                </CoinNameText>
                <CoinCodeText>
                  {`${token.symbol}/${token.baseSymbol}`}
                </CoinCodeText>
              </Link>
            </CoinNameCell>
            <CurrentPriceCell buy={buy}>
              {currentPrice}
              <ChangeDetector
                value={token.currentPrice}
              />
            </CurrentPriceCell>
            <DayChangeCell buy={buy}>
              {token.dayChange}
              %
            </DayChangeCell>
            <DayVolumeCell>
              {toFixed(4, token.volume / 10000)}
            </DayVolumeCell>
          </TickersRow>
        );
      })}
    </Scrollbars>
  );
};

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (pair) => { dispatch(actions.toggleFavorite({ pair })); },
});

export default connect(
  null,
  mapDispatchToProps,
)(translate('common')(TickersBody));
