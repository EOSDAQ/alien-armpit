import React from 'react';
import styled from 'styled-components';
import { colors } from '../css/theme';

export const SheetWrapper = styled('div')`
  position: relative;
  background: white;
  box-shadow: 0px 5px 0px rgba(0,0,0,0.09);
  border: 1px solid rgba(0, 0, 0, 0.11);
`;

export const SheetTab = styled('a')`
  div {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    text-align: center;
  }
`;

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
  box-shadow: 0px 0px 0px .2px #eee;
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
