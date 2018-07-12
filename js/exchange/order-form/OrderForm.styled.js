import styled from 'react-emotion';
import { SheetWrapper } from '../../common/components/molecules/Sheet';
import { orderFormPanelWidth } from '../../common/constants/styleConstants';

export const OrderFormWrapper = styled(SheetWrapper)`
  display: flex;
  width: ${orderFormPanelWidth * 2 + 2}px;
  background-color: #fff;
`;
