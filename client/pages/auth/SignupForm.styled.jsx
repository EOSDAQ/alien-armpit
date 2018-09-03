import styled from 'styled-components';
import { colors } from 'components/css/theme';
import { GreyBorderInput } from 'components/atom/Input';

export const SignupLabel = styled('label')`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grey500};
  padding-top: 44px;
  display: block;
`;

export const SignupInputWrap = styled('div')`
  position: relative;
`;

export const SignupInput = GreyBorderInput.extend`
  margin-top: 8px;
`;

export const SignupPolicy = styled('p')`  
  font-size: 13px;
  font-weight: 500;
  line-height: 1.56;
  padding-top: 46px;
  padding-bottom: 18px;

  a.link {
    color: ${colors.blue500};
  }
`;

export const SignupError = styled('p')`
  position: absolute;
  color: ${colors.red600};
  font-size: 14px;
  bottom: -22px;
  left: 12px;
`;
