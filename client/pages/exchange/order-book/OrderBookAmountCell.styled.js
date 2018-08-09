import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const OrderBookAmount = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  position: relative;
  ${({ isUpside }) => isUpside && `
    justify-content: flex-end;
  `}
`;

export const OrderBookAmountNum = styled('div')`
  position: absolute;
  display: flex;
  align-items: center;
  font-size: 11px;
  color: ${colors.grey500};
  font-weight: 300;
  padding: 0 12px;
  margin-top: 1px;
`;

export const OrderBookAmountBar = styled('div')`
  height: 80%;
  width: calc(${({ width }) => (width)}% - 10px);
  background-color: ${({ isUpside }) => (isUpside ? '#EBF6FE' : '#fff1f3')};
`;
