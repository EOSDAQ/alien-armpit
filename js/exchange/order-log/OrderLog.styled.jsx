import styled from 'react-emotion';
import { colors } from '../../common/css/theme';
import {
  SheetWrapper,
  SheetCell,
} from '../../common/components/molecules/Sheet';

export const OrderLogWrapper = styled(SheetWrapper)`
  width: 300px;
  margin-left: 12px;
`;

const OrderLogCellStyle = `
  flex: 1;
  padding: 0 10px;
`;

export const OrderLogPrice = styled(SheetCell)`
  ${OrderLogCellStyle}
`;

export const OrderLogAmount = styled(SheetCell)`
  ${OrderLogCellStyle}
`;

export const OrderLogTime = styled(SheetCell)`
  ${OrderLogCellStyle}
`;
