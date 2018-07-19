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
  border-bottom: ${tickersCellBorderWidth}px solid ${colors.grey180};
  line-height: ${sheetRowHeight - tickersCellBorderWidth}px;  
`;

export const FavoriteCell = styled(TickersCell)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${tickersFavoriateWidth}px;
`;

export const CoinNameCell = styled(TickersCell)`
  width: ${tickersCoinNameWidth}px;
`;

export const CoinNameText = styled('span')`
  font-size: 14px;
  font-weight: 700;
  color: ${colors.black500};  
`;

export const CoinCodeText = styled('span')`
  font-size: 12px;
  color: ${colors.grey390};
  font-family: ${theme.fontFamily.mono};
  margin-left: 4px;
`;

export const CurrentPriceCell = styled(TickersCell)`
  width: ${tickersCurrentPriceWidth}px;
  font-family: ${theme.fontFamily.sans};
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  font-weight: bold;
  font-size: 13px;
`;

export const DayChangeCell = styled(TickersCell)`
  width: ${tickersDayChangeWidth}px;
  font-family: ${theme.fontFamily.mono};
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  font-weight: bold;
  font-size: 13px;
  text-align: right;
`;

export const DayVolumeCell = styled(TickersCell)`
  width: ${tickersDayVolumeWidth}px;
  font-family: ${theme.fontFamily.sans};
  font-size: 12px;
`;

export const DayVolumeUnitText = styled('span')`
  font-size; 12px;
  color: ${colors.grey390};
  margin-left: 4px;
`;
