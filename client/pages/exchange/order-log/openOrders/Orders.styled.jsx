import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const OrderCancel = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-self: flex-end;
  cursor: pointer;

  svg {
    fill: #aaa;
    width: 100%;
    height: 100%;
  }

  &:hover {
    svg {
      fill: ${colors.red500};
    }
  }
`;
