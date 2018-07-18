import styled from 'react-emotion';
import { colors } from '../../../css/theme';
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

export const FavoriateCell = styled(TickersCell)`
  width: ${tickersFavoriateWidth}px;
`;

export const CoinNameCell = styled(TickersCell)`
  width: ${tickersCoinNameWidth}px;
`;

export const CoinNameText = styled('span')`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.black500};  
`;

export const CoinCodeText = styled('span')`
  font-size: 12px;
  color: ${colors.grey390};
  margin-left: 4px;
`;

export const CurrentPriceCell = styled(TickersCell)`
  width: ${tickersCurrentPriceWidth}px;
  font-size: 13px;
`;

export const DayChangeCell = styled(TickersCell)`
  width: ${tickersDayChangeWidth}px;
  font-size: 14px;
`;

export const DayVolumeCell = styled(TickersCell)`
  width: ${tickersDayVolumeWidth}px;
  font-size: 14px;
`;

export const DayVolumeUnitText = styled('span')`
  font-size; 12px;
  color: ${colors.grey390};
  margin-left: 4px;
`;
