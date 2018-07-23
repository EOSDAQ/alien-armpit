import styled from 'react-emotion';
import { colors } from '../../common/css/theme';
import { mixin } from '../../common/css/typography';

import {
  orderFormPanelWidth,
  orderFormTotalUnitWidth,
} from '../../common/constants/styleConstants';
import Button from '../../common/components/atom/Button';

export const OrderFormContainer = styled('div')`
  width: ${orderFormPanelWidth}px;
  border-radius: 2px;
  display: inline-block;
  background-color: #fff;
  &:first-child {
    border-right: 1px solid ${colors.grey170};  
  }
  display: flex;
  flex-direction: column;
`;

export const OrderFormTop = styled('div')`
  padding: 18px 14px 0px;
  flex: 1;
`;

export const OrderFormControl = styled('div')`
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }

  label {
    ${mixin.tradeLabel};
  }
`;

export const OrderFormInput = styled('div')`
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0 4px;
  display: flex;
  align-items: center;

  & input {
    flex: 1;
    border: 0;

    &:focus, &:active {
      outline: 0;
    }

    background: transparent;
  }
`;

export const OrderFormInputControl = styled('div')`
  flex: 0 0 auto;
`;

export const OrderFormBottom = styled('div')`
  background-color: ${({ isBuy }) => (isBuy ? colors.red120 : colors.blue140)};
  padding: 14px;
  flex: 0 0 auto;
`;

export const OrderFormTotal = styled('div')`
  label {
    ${mixin.tradeLabel}
  }
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
  margin-top: 36px;
  width: 100%;
  background-color: ${({ isBuy }) => (isBuy ? colors.red500 : colors.blue500)};
  color: #fff;

  &:hover {
    background-color: ${({ isBuy }) => (isBuy ? colors.red600 : colors.blue600)};
  }
`;
