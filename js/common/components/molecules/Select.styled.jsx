import React from 'react';
import { css } from 'emotion';
import styled from 'react-emotion';
import Box from '../atom/Box';

export const SelectOptions = styled(Box)`
  position: absolute;
  width: 160px;
  color: black;
  background: white;
  border-radius: 2px;
  overflow: hidden;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, .1), 0px 0px 0px 1px rgba(0, 0, 0, .1);
`;

export const SelectOption = styled(Box)`
  border-bottom: 1px solid #eee;
  padding: 12px;
  font-size: 14px;
  cursor: pointer;
  transition: .2s background ease;

  ${({ selected }) => selected && css`
    background: #23C0EA;
    color: white;

    &:hover {
      background: #23C0EA !important;
    }
  `}

  &:hover {
    background: rgba(0, 0, 0, .02);
  }
`;
