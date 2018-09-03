import styled from 'styled-components';
import { colors } from 'components/css/theme';
import { mixin } from 'components/css/typography';

export const Wrapper = styled('div')`
  padding: 80px 0;
  display: flex;
  align-items: flex-start;
`;

export const SentEmailGuide = styled('div')`
  margin-right: 92px;
`;

export const SentEmailHeading = styled('h2')`
  ${mixin.headingLarge};
`;

export const SentEmailDesc = styled('p')`
  ${mixin.textMedium};
  padding-top: 16px;
  padding-bottom: 55px;
  line-height: 1.4;

  span {
    color: ${colors.grey900};  
  }
`;

export const SendEmailNotReceive = styled('p')`
  ${mixin.textSmall};
  padding-top: 11px;  
  border-top: 1px solid #e5e5e5;
`;

export const SentEmailResendLink = styled('a')`
  color: ${colors.primary500};
  padding-left: 4px;
`;

export const SentEmailImg = styled('img')`
  width: 420px;
  height: auto;
  display: block;
`;
