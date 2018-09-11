import styled from 'styled-components';
import {
  SheetWrapper,
  SheetCell,
} from 'components/molecules/Sheet';
import { colors } from 'components/css/theme';

export const OrderLogWrapper = styled(SheetWrapper)`
  width: 300px;
  margin-left: 12px;
  flex: 1 1;
`;

const OrderLogCell = styled(SheetCell).attrs({
  justifySelf: "end",
})`
  text-align: right;
  color: ${colors.grey600};
`;

export const OrderLogPrice = styled(OrderLogCell)`
  text-align: right;
`;

export const OrderLogAmount = styled(OrderLogCell)`
  text-align: right;
`;

export const OrderLogTime = styled(OrderLogCell)`

`;
