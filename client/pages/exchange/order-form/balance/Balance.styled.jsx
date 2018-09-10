import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const BalanceWrapper = styled.div`
  padding: 0 12px;
`;

export const BalanceLabel = styled.div`
  font-size: 13px;
  color: ${colors.grey500};
`;

export const BalanceCurrency = styled.span`
  font-size: 12px;
  margin-left: 4px;
  color: ${colors.grey400};
`;

export const BalanceValue = styled.div`
  font-size: 15px;
  font-weight: medium;
  padding: 4px 0;
`;