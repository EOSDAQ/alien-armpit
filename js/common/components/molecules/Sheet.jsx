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
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.08);
  background-color: #fff;
`;

function setBorderStyle(relativePos) {
  switch (relativePos) {
    case -1:
      return `
        border-right: 1px solid #ddd;
        border-bottom-right-radius: 4px;
      `;
    case 0:
      return `
        border-bottom: none;
        color: ${colors.grey900};
      `;
    case 1:
      return `
        border-left: 1px solid #ddd;
        border-bottom-left-radius: 4px;
      `;
    default:
      return '';
  }
}

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
  height: ${sheetHeaderHeight}px;
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
  height: 100%;
  grid-template-columns: ${(({ columns }) => columns)};
  /* height: ${sheetRowHeight}px; */
`;

export const SheetCell = styled('div')`
  align-self: center;
  justify-self: ${({ justifySelf }) => justifySelf || 'start'};
`;
