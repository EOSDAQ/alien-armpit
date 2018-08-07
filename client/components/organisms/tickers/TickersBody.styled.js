import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';
import { SheetCell, SheetRow } from 'components/molecules/Sheet';

export const TickersRow = styled(SheetRow)`
  height: 45px;
  grid-gap: 16px;
  padding-right: 16px;
  transition: .05s background-color ease;

  &:hover {
    background-color: rgba(0, 0, 0, .02);
  }
`;

export const TickersCell = styled(SheetCell)`
  font-size: 13px;
  text-align: right;
  justify-self: flex-end;
`;

export const FavoriteCell = TickersCell.extend`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: flex-start;
`;

export const CoinIcon = styled.div`
  width: 16px;
  height: 16px;
  margin-right: 12px;

  transition: .2s all ease;
  background: url(${({ url }) => url}) 50% 50%/cover no-repeat;

`;

export const CoinNameCell = TickersCell.extend`
  justify-self: flex-start;
`;

export const CoinNameText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey600};
  letter-spacing: .3px;
  line-height: 1;
  transition: .2s color ease;

  &:hover {
    color: ${colors.grey900};
  }
`;

export const CoinCodeText = styled.span`
  font-size: 12px;
  color: ${colors.grey400};
  font-family: ${theme.fontFamily.mono};
  margin-left: 4px;
`;

export const CurrentPriceCell = TickersCell.extend`
  font-family: ${theme.fontFamily.number};
  letter-spacing: .5px;
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  text-align: right;
`;

export const DayChangeCell = TickersCell.extend`
  font-family: ${theme.fontFamily.number};
  letter-spacing: .5px;
  color: ${({ buy }) => buy ? theme.colors.red500 : theme.colors.blue500};
  text-align: right;
`;

export const DayVolumeCell = TickersCell.extend`
  font-family: ${theme.fontFamily.number};
  color: ${colors.black720};
  letter-spacing: .5px;
`;

export const DayVolumeUnitText = styled.span`
  font-size: 12px;
  font-family: ${theme.fontFamily.sans};
  color: ${colors.grey400};
  margin-left: 2px;
`;
