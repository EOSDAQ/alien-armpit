import styled from 'react-emotion';
import { colors } from '../common/css/theme';
import {
  SheetWrapper,
  SheetTab,
  SheetCell,
} from '../common/components/molecules/Sheet';
import {
  bottomBlanks,
} from './Exchange.styled.constants';
import { mixin } from '../common/css/typography';

const exchangeLeftWidth = 530;
const exchangeRightWidth = 740;
const tradeToatalUnitWidth = 20;
const tradeBoxWidth = 229;

export const ExchangeBody = styled('div')`
  background-color: ${colors.grey130};  
`;

export const ExchangeContainer = styled('div')`
  display: flex;
  margin: 0 auto;
  width: 1280px;
  padding: 24px 0 ${bottomBlanks};
`;

export const ExchangeLeftSide = styled('div')`
  display: flex;
  width: ${exchangeLeftWidth}px;
  flex-direction: column;  
  margin-right: 12px;
`;

export const ExchangeRightSide = styled('div')`
  display: flex;
  width: ${exchangeRightWidth}px;
`;

export const ExchangeRightBottom = styled('div')`
  display: flex;
  width: ${exchangeRightWidth}px;
  margin-top: 12px;
`;


export const ExchangeTradeBoxWrapper = styled(SheetWrapper)`
  display: flex;
  width: ${tradeBoxWidth * 2 + 2}px;
  background-color: #fff;
`;

export const TradeContainer = styled('div')`
  width: ${tradeBoxWidth}px;
  border-radius: 2px;
  display: inline-block;
  background-color: #fff;
  &:first-child {
    border-right: 1px solid ${colors.grey170};  
  }
`;

export const TradeBoxTop = styled('div')`
  padding: 18px 14px 0px;
`;

export const TradeHeader = styled('h4')`  
  height: 40px;
  font-size: 16px;
  font-weight: 600;
  color: ${({ isBuy }) => (isBuy ? colors.red150 : '')}
`;

export const TradeBody = styled('div')`
`;

export const TradeInput = styled('div')`
  margin-top: 12px;

  &:first-child {
    margin-top: 0;
  }

  label {
    ${mixin.tradeLabel}
  }

  div {
    border-bottom: 1px solid ${colors.grey270};

    input[type=text] {
      height: 29px;
      line-height: 29px;
      border: 0;
      font-size: 14px;
      color: #000;
      padding: 0 10px;
      outline: 0;
      text-align: right;
    }
  }
`;

export const TradeBoxBottom = styled('div')`
  background-color: ${({ isBuy }) => (isBuy ? colors.red120 : colors.blue140)};
  padding: 32px 14px 14px;
  margin-top: 60px;
`;

export const TradeTotal = styled('div')`
  label {
    ${mixin.tradeLabel}
  }
`;

export const TradeTotalAmount = styled('span')`
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  color: rgba(9, 9, 9, 0.79);
  text-align: right;
  width: calc(100% - ${tradeToatalUnitWidth}px);
  padding-right: 4px;
`;

export const TradeTotalUnit = styled('span')`
  display: inline-block;
  width: ${tradeToatalUnitWidth}px;
  font-size: 12px;
  color: rgba(9, 9, 9, 0.3);
  font-weight: 500;
  text-align: right;
`;

export const TradeButton = styled('button')`
  width: 100%;
  height: 36px;
  margin-top: 36px;
  border-radius: 4px;
  border: 1px solid ${({ isBuy }) => (isBuy ? colors.red150 : colors.blue350)};
  background-color: ${({ isBuy }) => (isBuy ? colors.red150 : colors.blue350)};
  font-size: 14px;
  font-weight: 600;
  color: #fff;
`;

export const ExchangeTradeLogWrapper = styled(SheetWrapper)`
  width: 300px;
  margin-left: 12px;
`;

export const TradeLogBody = styled('div')`
  font-size: 14px;
  line-height: 36px;
  text-align: center;
`;

export const TradeLogTab = styled(SheetTab)`
  flex: 1;
`;

const TradeLogCellStyle = `
  flex: 1;
  padding: 0 10px;
  border-bottom: 1px solid ${colors.grey180};
`;

export const TradeLogPrice = styled(SheetCell)`
  ${TradeLogCellStyle}
`;

export const TradeLogAmount = styled(SheetCell)`
  ${TradeLogCellStyle}
`;

export const TradeLogTime = styled(SheetCell)`
  ${TradeLogCellStyle}
`;
