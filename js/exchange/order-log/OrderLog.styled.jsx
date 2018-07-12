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

export const OrderLogBody = styled('div')`
  font-size: 14px;
  line-height: 36px;
  text-align: center;
`;

const OrderLogCellStyle = `
  flex: 1;
  padding: 0 10px;
  border-bottom: 1px solid ${colors.grey180};
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
