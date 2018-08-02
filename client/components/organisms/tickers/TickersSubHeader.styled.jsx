import styled from 'styled-components';
import { TickersCell } from './TickersBody.styled';
import { colors } from '../../css/theme';

export const TickersHeaderCell = styled(TickersCell)`
  font-size: 13px;
  display: flex;
  align-items: center;
  color: ${colors.grey800};
`;
