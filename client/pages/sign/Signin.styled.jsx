import styled from 'styled-components';
import { colors } from 'common/css/theme';

export const SigninWrapper = styled('div')`
  width: 668px;
  padding: 102px 86px 105px 137px;
  background-color: #fafafa;
`;

export const SigninHeader = styled('h2')`
  font-size: 48px;
  font-weight: 700;
  color: ${colors.grey800};
  padding-top: 34px;
`;

export const SigninDesc = styled('p')`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.4;
  color: ${colors.grey600};
  padding-top: 11px;
`;

