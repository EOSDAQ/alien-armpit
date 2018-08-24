import styled from 'styled-components';
import { colors } from 'components/css/theme';

export const SigninWrapper = styled('div')`
  width: 668px;
  padding: 102px 86px 105px 137px;
  background-color: #fafafa;
`;

export const SigninHeader = styled('h2')`
  font-size: 32px;
  font-weight: 400;
  line-height: 1.2;
  color: ${colors.grey800};
  padding-top: 34px;
`;

export const SigninDesc = styled('p')`
  font-size: 16px;
  line-height: 1.6;
  color: ${colors.grey600};
  padding-top: 12px;
`;

