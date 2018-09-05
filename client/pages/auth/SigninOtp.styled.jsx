import styled from 'styled-components';
import theme, { colors } from 'components/css/theme';
import Input from 'components/atom/Input';

const { fontFamily } = theme;

export const Page = styled('div')`
  height: 100%;
`;

export const Container = styled('div')`
  min-height: calc(100% - 44px - 115px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrap = styled('div')`
  width: 400px;
  height: 300px;
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

export const CodeInput = styled(Input)`
  height: 80px;
  font-size: 40px;
  font-family: ${fontFamily.mono};
  text-align: center;
  width: 100%;
  margin: 20px 0;
  max-width: 100%;
`;
