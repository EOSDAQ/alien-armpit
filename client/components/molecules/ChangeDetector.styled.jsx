import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const Highlight = styled('span')`
  position: absolute;
  top: 2px;
  bottom: 2px;
  right: 0;
  width: 100%;  
  border: 1px solid transparent;
  border-color: ${({ change }) => {
    if (change === 'up') {
      return colors.red500;
    }

    if (change === 'down') {
      return colors.blue500;
    }

    return 'transparent';
  }};
`;
