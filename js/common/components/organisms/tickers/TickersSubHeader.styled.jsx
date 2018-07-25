import styled from 'styled-components';
import { TickersCell } from './TickersBody.styled';
import {
  tickersFavoriateWidth,
  tickersCoinNameWidth,
  tickersCurrentPriceWidth,
  tickersDayChangeWidth,
  tickersDayVolumeWidth,
} from '../../../constants/styleConstants';
import { colors } from '../../../css/theme';

export const TickersHeaderCell = styled(TickersCell)`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: ${colors.grey800};
`;