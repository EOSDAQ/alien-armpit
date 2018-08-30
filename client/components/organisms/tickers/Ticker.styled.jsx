import styled from 'styled-components';
import { SheetRow } from '../../molecules/Sheet';
import { tickersSheetRowColumns } from '../../styleConstants';

export const Item = styled(SheetRow)`
  height: 45px;
  padding-right: 16px;
  transition: .05s background-color ease;
  grid-template-columns: ${tickersSheetRowColumns};

  &:hover {
    background-color: rgba(0, 0, 0, .02);
  }
`;