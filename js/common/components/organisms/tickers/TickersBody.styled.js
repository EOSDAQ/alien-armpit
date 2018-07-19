import styled from 'react-emotion';
import theme, { colors } from '../../../css/theme';
import { SheetCell } from '../../molecules/Sheet';
import {
  sheetRowHeight,
  tickersFavoriateWidth,
  tickersCoinNameWidth,
  tickersCurrentPriceWidth,
  tickersDayChangeWidth,
  tickersDayVolumeWidth,
  tickersCellBorderWidth,
} from '../../../constants/styleConstants';

export const TickersCell = styled(SheetCell)`
  line-height: ${sheetRowHeight - tickersCellBorderWidth}px;  
`;

export const FavoriteCell = styled(TickersCell)`
  display: flex;
  justify-content: center;
  align-items: center;
  /* width: ${tickersFavoriateWidth}px; */
`;

export const CoinNameCell = styled(TickersCell)`
  /* width: ${tickersCoinNameWidth}px; */
`;

export const CoinNameText = styled('span')`
  font-size: 14px;
  font-weight: 500;
  color: black;  
`;

export const CoinCodeText = styled('span')`
  font-size: 13px;
  color: ${colors.grey390};
  font-family: ${theme.fontFamily.mono};
  margin-left: 4px;
`;

export const CurrentPriceCell = styled(TickersCell)`
  /* width: ${tickersCurrentPriceWidth}px; */
  font-family: ${theme.fontFamily.mono};
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  font-weight: 500;
  font-size: 13px;
  text-align: right;
`;

export const DayChangeCell = styled(TickersCell)`
  /* width: ${tickersDayChangeWidth}px; */
  font-family: ${theme.fontFamily.mono};
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  font-weight: 400;
  font-size: 13px;
  text-align: center;
`;

export const DayVolumeCell = styled(TickersCell)`
  /* width: ${tickersDayVolumeWidth}px; */
  font-family: ${theme.fontFamily.mono};
  font-size: 13px;
`;

export const DayVolumeUnitText = styled('span')`
  font-size: 12px;
  font-family: ${theme.fontFamily.sans};
  color: ${colors.grey400};
  margin-left: 2px;
`;
