import styled from 'styled-components';
import {
  SheetWrapper,
  SheetCell,
} from 'components/molecules/Sheet';

export const OrderLogWrapper = styled(SheetWrapper)`
  width: 300px;
  margin-left: 12px;
  flex: 1 1;
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
