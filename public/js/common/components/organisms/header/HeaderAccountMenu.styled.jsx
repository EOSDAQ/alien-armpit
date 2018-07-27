import React from 'react';
import styled from 'styled-components';
import { colors } from '../../../css/theme';
import { TextButton } from '../../atom/Button';

export const AccountMenu = styled.div`
  padding: 16px;
  padding-top: 32px;
  background: #fff;
  width: 240px;
`;

export const AccountMenuWelcome = styled.div`
  color: ${colors.grey500};
  font-size: 14px;
  margin-bottom: 4px;
`;

export const AccountName = styled.div`
  font-size: 20px;
  font-weight: 600;
`;

export const MenuActions = styled.div`
  padding-top: 1rem;
  margin-top: 1rem;
`;

export const MenuAction = styled(TextButton)`
  padding: 1rem;
  padding-left: 1rem;
  margin: 0 -1rem;
  display: block;
  border-bottom: 1px solid #f0f0f0;

  color: ${colors.grey600};

  &:hover {
    color: ${colors.primary500};
  }
`

export const CopyPublicKey = styled(MenuAction)`
  color: ${colors.grey600};

  &:hover {
    color: ${colors.primary500};
  }
`;