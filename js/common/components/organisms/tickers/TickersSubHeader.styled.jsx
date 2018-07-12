import styled from 'react-emotion';
import { TickersCell } from './TickersBody.styled';
import {
  tickersFavoriateWidth,
  tickersCoinNameWidth,
  tickersCurrentPriceWidth,
  tickersDayChangeWidth,
  tickersDayVolumeWidth,
} from '../../../constants/styleConstants';

export const TickersHeaderCell = styled(TickersCell)`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

export const FavoriateHeader = styled(TickersHeaderCell)`
  width: ${tickersFavoriateWidth}px;
`;

export const CoinNameHeader = styled(TickersHeaderCell)`
  width: ${tickersCoinNameWidth}px;
`;

export const CurrentPriceHeader = styled(TickersHeaderCell)`
  width: ${tickersCurrentPriceWidth}px;
`;

export const DayChangeHeader = styled(TickersHeaderCell)`
  width: ${tickersDayChangeWidth}px;
`;

export const DayVolumeHeader = styled(TickersHeaderCell)`
  width: ${tickersDayVolumeWidth}px;
`;
