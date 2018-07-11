import styled from 'react-emotion';
import { colors } from '../../css/theme';
import {
  SheetTab,
  SheetCell,
} from '../molecules/Sheet';
import {
  sheetRowHeight,
} from '../molecules/SheetConstants';

const tabWidth = 100;
const favoriateWidth = 36;
const coinNameWidth = 178;
const currentPriceWidth = 126;
const dayChangeWidth = 100;
const dayVolumeWidth = 100;

const getColorWithDayChange = (dayChange) => {
  if (dayChange > 0) {
    return 'red';
  }

  if (dayChange < 0) {
    return 'blue';
  }

  return 'black';
};

export const Tab = styled(SheetTab)`
  div {
    width: ${tabWidth}px;
  }
`;

const tickersCellBorderWidth = 1;
export const TickersCell = styled(SheetCell)`
  border-bottom: ${tickersCellBorderWidth}px solid ${colors.grey180};
  line-height: ${sheetRowHeight - tickersCellBorderWidth}px;  
`;

export const TickersHeaderCell = styled(TickersCell)`
  font-size: 13px;
  color: rgba(0, 0, 0, 0.5);
`;

export const FavoriateHeader = styled(TickersHeaderCell)`
  width: ${favoriateWidth}px;
`;

export const CoinNameHeader = styled(TickersHeaderCell)`
  width: ${coinNameWidth}px;
`;

export const CurrentPriceHeader = styled(TickersHeaderCell)`
  width: ${currentPriceWidth}px;
`;

export const DayChangeHeader = styled(TickersHeaderCell)`
  width: ${dayChangeWidth}px;
`;

export const DayVolumeHeader = styled(TickersHeaderCell)`
  width: ${dayVolumeWidth}px;
`;

export const FavoriateCell = styled(TickersCell)`
  width: ${favoriateWidth}px;
`;

export const CoinNameCell = styled(TickersCell)`
  width: ${coinNameWidth}px;
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
  width: ${currentPriceWidth}px;
  font-size: 13px;
`;

export const DayChangeCell = styled(TickersCell)`
  width: ${dayChangeWidth}px;
  font-size: 13px;
`;

export const DayVolumeCell = styled(TickersCell)`
  width: ${dayVolumeWidth}px;
  font-size: 13px;
`;

export const DayVolumeUnitText = styled('span')`
  font-size; 12px;
  color: ${colors.grey390};
  margin-left: 4px;
`;
