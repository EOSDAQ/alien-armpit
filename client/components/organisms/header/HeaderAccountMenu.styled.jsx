import React from 'react';
import styled from 'styled-components';
import { colors } from 'components/css/theme';
import { TextButton } from 'components/atom/Button';

export const AccountMenu = styled.div`
  padding: 16px;
  padding-top: 32px;
  background: #fff;
  width: 320px;
`;

export const SectionLabel = styled('div')`
  color: ${colors.grey500};
  width: 100%;
  font-size: 12px;
  padding-bottom: 6px;
  border-bottom: 1px solid ${colors.grey100};
`;

export const Section = styled('div')`
  margin: 16px 0 36px 0;
`;

export const AccountIdenticon = styled.div`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 999rem;
  overflow: hidden;
  padding: 2px;
  background: linear-gradient(to bottom, #222, #333);
`;

export const AccountName = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

export const AccountEmail = styled('div')`
  color: ${colors.grey500};
  font-size: 14px;
  margin-top: 2px;
`;

export const MenuActions = styled.div`
  padding-top: 1rem;
  margin-top: 1rem;
`;

export const SecurityAction = styled('div')`
  padding: 12px 0;
  padding-right: 16px;
  font-size: 14px;
  color: ${colors.grey700};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SecurityValue = styled('div')`
  width: 20px;
  height: 20px;
  padding: 4px;
  flex: 0 0 auto;
`;

export const SecurityButton = styled('div')`
  width: 20px;
  height: 20px;
  flex: 0 0 auto;
`;

export const MenuAction = styled(TextButton)`
  padding: 1rem;
  width: 100%;
  padding-left: 1rem;
  margin: 0 -1rem;
  display: block;
  border-bottom: 1px solid #f0f0f0;

  color: ${colors.grey600};

  &:hover {
    color: ${colors.primary500};
  }
`;
