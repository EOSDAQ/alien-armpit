import styled from 'styled-components';
import { colors } from 'components/css/theme';
import Button from 'components/atom/Button';
import { NumberInput } from 'components/atom/Input';

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

export const OrderFormButton = styled(Button)`
  width: 100%;
  justify-content: center;
  background-color: ${({ isAsk }) => (!isAsk ? colors.red500 : colors.blue500)};
  color: #fff;

  &:hover {
    background-color: ${({ isAsk }) => (!isAsk ? colors.red600 : colors.blue600)};
  }
`;
