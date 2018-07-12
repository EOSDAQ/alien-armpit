import styled from 'react-emotion';
import { colors } from '../../common/css/theme';
import { mixin } from '../../common/css/typography';
import {
  orderFormPanelWidth,
  orderFormTotalUnitWidth,
} from '../../common/constants/styleConstants';

export const OrderFormContainer = styled('div')`
  width: ${orderFormPanelWidth}px;
  border-radius: 2px;
  display: inline-block;
  background-color: #fff;
  &:first-child {
    border-right: 1px solid ${colors.grey170};  
  }
`;

export const OrderFormTop = styled('div')`
  padding: 18px 14px 0px;
`;

export const OrderFormHeader = styled('h4')`  
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ isBuy }) => (isBuy ? colors.red150 : '')}
`;

export const OrderFormControl = styled('div')`
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }

  label {
    ${mixin.tradeLabel}
  }

  div {
    border-bottom: 1px solid ${colors.grey270};

    input[type=text] {
      height: 29px;
      line-height: 29px;
      border: 0;
      font-size: 14px;
      color: #000;
      padding: 0 10px;
      outline: 0;
      text-align: right;
    }
  }
`;

export const OrderFormBottom = styled('div')`
  background-color: ${({ isBuy }) => (isBuy ? colors.red120 : colors.blue140)};
  padding: 32px 14px 14px;
  margin-top: 60px;
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

export const OrderFormButton = styled('button')`
  width: 100%;
  height: 36px;
  margin-top: 36px;
  border-radius: 4px;
  border: 1px solid ${({ isBuy }) => (isBuy ? colors.red150 : colors.blue350)};
  background-color: ${({ isBuy }) => (isBuy ? colors.red150 : colors.blue350)};
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;
