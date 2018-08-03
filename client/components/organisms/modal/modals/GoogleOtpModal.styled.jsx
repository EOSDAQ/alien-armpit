import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';

const { fontFamily } = theme;

export const Wrap = styled('div')`
  width: 100%;  
`;

export const Title = styled('h3')`
  font-size: 24px;
  color: ${colors.grey900};
`;

export const Desc = styled('p')`
  font-size: 13px;
  font-family: ${fontFamily.notosans};
  color: ${colors.grey600};
  padding-top: 20px;
  padding-bottom: 7px;
  line-height: 1.3;
`;

export const Label = styled('p')`
  font-size: 13px;
  color: ${colors.grey600};
  padding-top: 26px;
`;

export const QrCodeWrap = styled('div')`
  padding-top: 12px;
`;

export const BackupKey = styled('strong')`
  display: block;
  font-size: 18px;
  color: ${colors.grey900};
  padding-top: 10px;
`;

export const Caution = styled('p')`
  font-size: 13px;
  color: ${colors.red500};
  padding-top: 10px;
  line-height: 1.3;
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
