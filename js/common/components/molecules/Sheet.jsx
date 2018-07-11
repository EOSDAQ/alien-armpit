import React from 'react';
import styled from 'react-emotion';
import Box from '../atom/Box';
import Flex from '../atom/Flex';
import Text from '../atom/Text';
import { Input } from './Form';
import { colors } from '../../css/theme';
import {
  sheetRowHeight,
  sheetHeaderHeight,
} from './SheetConstants';


export const SheetWrapper = styled('div')`
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0px 0px 4px 1px rgba(0, 0, 0, 0.08);
  background-color: #fff;
`;

export const SheetHeading = styled('div')`
  display: flex;
  width: 100%;
  text-align: center;

  span {
    display: block;
    width: 100%;
    color: ${colors.grey510};
    font-size: 13px;
    font-weight: 500;
    line-height: ${sheetHeaderHeight}px;
    border-bottom: 1px solid ${colors.black150};    
  }
`;

export const SheetTab = styled('a')`
  div {
    display: flex;

    span {
      display: block;
      width: 100%;
      color: ${({ isSelected }) => (isSelected ? colors.cyan700 : colors.grey590)};
      font-size: 14px;
      text-align: center;      
      line-height: ${sheetHeaderHeight}px;
      border-bottom: 1px solid ${({ isSelected }) => (isSelected ? colors.cyan700 : colors.grey330)};
    }
  }
`;

export const SheetSingleHeading = ({ text }) => (
  <Text
    fontSize="sm"
  >
    {text}
  </Text>
);

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
  display: flex;
  width: 100%;  
  alignItems: center;
  background-color: #fff;
`;

export const SheetRow = props => (
  <Flex height={sheetRowHeight} {...props}>
    {props.children}
  </Flex>
);

export const SheetCell = styled('div')`
  height: ${sheetRowHeight}px;
  background-color: #fff;  
`;
