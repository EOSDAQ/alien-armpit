import React from 'react';
import styled from 'react-emotion';

const Button = styled.button`
  border: none;
  margin: 0px;
  padding: 0px 8px;
  margin-right: -8px;
  /* outline: none; */
  background: transparent;
  color: inherit;
  font: inherit;
  font-size: 14px;
  line-height: 30px;
  height: 30px;
  transition: .2s background ease;
  border-radius: 4px;
  cursor: pointer;

  &::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  & svg {
    display: inline-block;
    vertical-align: middle;
    margin-right: 8px;
  }

  &:hover {
    background: rgba(0, 0, 0, .4);
  }
`;

export default Button;
