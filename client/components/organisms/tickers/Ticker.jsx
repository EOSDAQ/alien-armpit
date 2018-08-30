import React from 'react';
import { Item } from './Ticker.styled';
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
import { toFixed } from 'utils/format';
import { IconButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import { Link } from '@reach/router';
import ChangeDetector from '../../molecules/ChangeDetector';

class Ticker extends React.PureComponent {
  render() {
    const { token, onToggleFavorite } = this.props;
    const buy = token.dayChange > 0;
    const currentPrice = toFixed(4, token.currentPrice / 1000);

    return (
      <Item>
        <FavoriteCell>
          <IconButton onClick={() => { onToggleFavorite(token.pair); }}>
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
      </Item>
    )
  }
}

export default Ticker;
