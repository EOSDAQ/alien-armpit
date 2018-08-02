import styled from 'styled-components';
import { SheetWrapper } from 'components/molecules/Sheet';
import { orderFormPanelWidth } from 'pages/styleConstants';

export const OrderFormWrapper = styled(SheetWrapper)`
  display: flex;
  width: ${orderFormPanelWidth * 2 + 2}px;
  background-color: #fff;
`;
