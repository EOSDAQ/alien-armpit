import styled from 'styled-components';
import { colors } from 'components/css/theme';
import { mixin } from 'components/css/typography';

import {
  orderFormTotalUnitWidth,
} from 'pages/styleConstants';
import Button from 'components/atom/Button';
import Input, { NumberInput } from 'components/atom/Input';

export const OrderFormContainer = styled('div')`
  width: 50%;
  background-color: #fff;

  &:first-child {
    border-right: 1px solid ${colors.grey170};  
  }
  display: flex;
  flex-direction: column;
`;

export const OrderFormInput = styled(NumberInput)`
  text-align: right;
`;

export const OrderFormAction = styled('div')`
  padding: 12px;
`;

export const OrderFormInputControl = styled('div')`
  flex: 0 0 auto;
`;

export const OrderFormTotal = styled('div')`
`;

export const OrderFormTotalAmount = styled('span')`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: rgba(9, 9, 9, 0.79);
  text-align: right;
  width: calc(100% - ${orderFormTotalUnitWidth}px);
  padding-right: 4px;
`;

export const OrderFormTotalUnit = styled('span')`
  display: inline-block;
  width: ${orderFormTotalUnitWidth}px;
  font-size: 12px;
  color: rgba(9, 9, 9, 0.3);
  font-weight: 500;
  text-align: right;
`;

export const OrderFormButton = styled(Button)`
  margin-top: 16px;
  width: 100%;
  justify-content: center;
  background-color: ${({ isBuy }) => (isBuy ? colors.red500 : colors.blue500)};
  color: #fff;

  &:hover {
    background-color: ${({ isBuy }) => (isBuy ? colors.red600 : colors.blue600)};
  }
`;
