import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';

const { fontFamily } = theme;

export const Wrap = styled('div')`
  width: 100%;  
`;

export const Title = styled('div')`
  font-size: 32px;
  line-height: 1.2;
  font-weight: 400;
  color: ${colors.grey900};
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Desc = styled('p')`
  font-size: 14px;
  color: ${colors.grey700};
  line-height: 1.6;
`;

export const Label = styled('div')`
  font-size: 13px;
  color: ${colors.grey600};
  margin-top: 48px;
`;

export const QrCodeWrap = styled('div')`
  padding-top: 12px;
  width: 160px;
`;

export const BackupKey = styled('div')`
  display: block;
  font-size: 24px;
  font-family: ${fontFamily.mono};
  color: ${colors.grey900};
  padding-top: 10px;
`;

export const Caution = styled('div')`
  margin-top: 0px;
`;

export const NextStep = styled('a')`
  font-size: 14px;
  color: ${colors.blue500};
  padding-top: 17px;
  float: right;
`;

export const CodeInput = styled('input')`
  border: 1px solid rgba(158, 124, 1, 0.08);
  border-radius: 4px;
  background-color: ${colors.grey50};
  height: 50px;
  color: ${colors.grey500};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  margin: 20px auto 0;
`;
