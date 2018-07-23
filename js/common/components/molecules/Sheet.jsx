import React from 'react';
import styled from 'react-emotion';
import Box from '../atom/Box';
import { Input } from './Form';
import { colors } from '../../css/theme';
import {
  sheetRowHeight,
  sheetHeaderHeight,
} from '../../constants/styleConstants';

export const SheetWrapper = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.08);
  background-color: #fff;
`;

export const SheetTab = styled('a')`
  div {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

export const SheetSearch = () => {
  const height = 29;
  return (
    <Box
      bg="#fff"
      border="1px solid #000"
      height={height}
    >
      <Input
        type="text"
        height={height - 2}
        border={0}
      />
    </Box>
  );
};

export const SheetHeader = styled('div')`
  width: 100%;
  background-color: #fff;
`;

export const SheetHeading = styled('div')`
  align-self: center;
  justify-self: center;

  span {
    color: ${colors.grey600};
    font-size: 13px;
  }
`;

export const SheetRow = styled('div')`
  display: grid;
  grid-template-columns: ${(({ columns }) => columns)};
  height: 40px;

  &:nth-child(even) {
    background: ${colors.grey50};
  }
`;

export const SheetHeadingRow = styled(SheetRow)`
  height: 32px;
  font-size: 13px;
  border-bottom: 1px solid #ddd;
`;

export const SheetCell = styled('div')`
  font-size: 13px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-self: ${({ justifySelf }) => justifySelf || 'start'};
`;
