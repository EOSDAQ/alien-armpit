import React from 'react';
import styled from 'styled-components';

export const SnsIcon = styled.div`
  padding: 4px;
  cursor: pointer;

  svg {
    fill: ${({ bg }) => (bg === 'white' ? '#888' : '#aaa')};
    width: 20px;
    height: 20px;
    transition: .2s fill ease;
  }

  &:hover svg {
    fill: ${({ bg }) => {
      return bg === 'white' ? '#444' : '#fff';
    }
  }
`;
