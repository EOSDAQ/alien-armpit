import styled from 'styled-components';
import theme, { colors } from '../../../css/theme';
import { SheetCell } from '../../molecules/Sheet';
import {
  tickersCoinNameWidth,
  tickersCurrentPriceWidth,
  tickersDayChangeWidth,
  tickersDayVolumeWidth,
} from '../../../constants/styleConstants';

export const TickersCell = SheetCell.extend`
`;

export const FavoriteCell = TickersCell.extend`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CoinNameCell = TickersCell.extend`
  /* width: ${tickersCoinNameWidth}px; */
`;

export const CoinNameText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: black;  
`;

export const CoinCodeText = styled.span`
  font-size: 13px;
  color: ${colors.grey390};
  font-family: ${theme.fontFamily.mono};
  margin-left: 4px;
`;

export const CurrentPriceCell = TickersCell.extend`
  width: ${tickersCurrentPriceWidth}px;
  font-family: ${theme.fontFamily.number};
  letter-spacing: .5px;
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  font-weight: 500;
  font-size: 14px;
  text-align: right;
`;

export const DayChangeCell = TickersCell.extend`
  /* width: ${tickersDayChangeWidth}px; */
  font-family: ${theme.fontFamily.number};
  letter-spacing: .5px;
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  font-weight: 400;
  font-size: 13px;
  text-align: right;
`;

export const DayVolumeCell = TickersCell.extend`
  font-family: ${theme.fontFamily.number};
  color: ${theme.colors.black720};
  letter-spacing: .5px;
  font-size: 13px;
`;

export const DayVolumeUnitText = styled.span`
  font-size: 12px;
  font-family: ${theme.fontFamily.sans};
  color: ${colors.grey400};
  margin-left: 2px;
`;
