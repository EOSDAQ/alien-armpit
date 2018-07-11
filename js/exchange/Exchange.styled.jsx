import styled from 'react-emotion';
import { colors } from '../common/css/theme';
import {
  SheetWrapper,
  SheetRow,
  SheetTab,
  SheetCell,
} from '../common/components/molecules/Sheet';

const exchangeLeftWidth = 530;
const exchangeRightWidth = 740;
const tradeToatalUnitWidth = 20;
const tradeBoxWidth = 229;

export const tradeLabelStyle = `
  font-size: 12px;
  font-weight: 500;
  color: rgba(120, 122, 126, 0.82);
  display: block;
`;

export const tradeNumStyle = `
  font-size: 13px;
  font-weight: 500;
  colors: ${colors.black720};  
`;

export const tradeTradeUnitStyle = `
  font-size: 13px;
  color: ${colors.grey390};
`;

export const ExchangeBody = styled('div')`
  background-color: ${colors.grey130};  
`;

export const ExchangeLeftSideWrap = styled('div')`
  display: flex;
  width: ${exchangeLeftWidth}px;
  flex-direction: column;  
  margin-right: 12px;
`;

export const ExchangeOrderBookWrapper = styled(SheetWrapper)`
  margin-top: 12px;
`;

export const ExchangeOrderBookAmount = styled(SheetRow)`
  position: relative;
  justify-content: ${({ isUpside }) => (isUpside ? 'flex-end' : '')};
  flex: 1;
`;

export const ExchangeOrderBookAmountNum = styled('div')`
  position: absolute;
  top: 0;
  font-size: 12px;
  padding: ${({ isUpside }) => (isUpside ? '0 10px 0 0' : '0 0 0 10px')}
`;

export const ExchangeOrderBookAmountBar = styled('div')`
  display: flex;
  height: 20px;
  width: calc(${({ width }) => (width)}% - 10px);
  background-color: ${({ isUpside }) => (isUpside ? colors.blue190 : colors.red130)};
  margin-top: 7px;
`;

export const ExchangeOrderBookPrice = styled(SheetRow)`
  flex: 1;  
  background-color: ${({ isUpside }) => (isUpside ? colors.blue120 : colors.red120)};  
  font-size: 12px;  
`;

export const ExchangeOrderBookAskingPrice = styled('span')`
  display: flex;
  width: 70%;
  justify-content: flex-end;
  padding: 0 10px;
  font-weight: 700;
`;

export const ExchangeOrderBookChange = styled('span')`
  display: flex;
  width: 30%;
  padding-right: 10px;
  justify-content: flex-end;
`;

export const ExchangeOrderBookTradeInfoWrapper = styled('div')`
  display: flex;  
  flex-direction: column; 
  flex-basis: 33.33%; 
  padding: 0 12px;
`;

export const OrderBookTradeInfoAmountRow = styled('div')`
  margin-top: 30px;
  dt {
    ${tradeLabelStyle}
  }
`;

export const OrderBookTradeInfoAmount = styled('div')`
  ${tradeNumStyle}
  text-align: right;
  margin-top: 6px;
`;

export const OrderBookTradeInfoUnit = styled('span')`
  ${tradeTradeUnitStyle}
  padding-left: 4px;
`;

export const OrderBookTradeInfoPriceRow = styled('div')`
  margin-top: 20px;
  dt {
    ${tradeLabelStyle}
  }
`;

export const OrderBookTradeInfoPrice = styled('div')`
  ${tradeNumStyle}
  display: inline-block;
  padding-left: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  float: right;
  text-align: right;
  vertical-align: top;
  height: 20px;
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
    ${tradeLabelStyle}
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
    ${tradeLabelStyle}
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

export const OrderBookTradeLog = styled('div')`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const OrderBookTradeLogHeader = styled('div')`
  display: flex;
  height: 27px;
  flex: 1;
  flex-basis: 50%;
  text-align: center;
  font-size: 13px;
  color: ${colors.black650};
  background-color: ${colors.grey140};
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-right: 0;

  &:first-child {
    border-left: 0;
  }
`;

export const OrderBookTradeLogRow = styled('div')`
  display: flex;
`;

export const OrderBookTradeLogCell = styled('div')`
  display: flex;
  flex: 1;
  flex-basis: 50%;
  height: 30px;
  text-align: right;
  font-size: 12px;
  align-items: center;
  justify-content: flex-end;
  padding: 0 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.12);

  &:first-child {
    border-left: 0;
  }
`;

const orderBookFooterHeight = 42;
const orderBookFooterContentsHeight = 23;
const orderBookFooterVerticalPadding = (orderBookFooterHeight - orderBookFooterContentsHeight) / 2;
export const OrderBookFooterCell = styled('div')`
  flex: 1;  
  background-color: ${colors.grey140};
  height: ${orderBookFooterHeight}px;
  padding: ${orderBookFooterVerticalPadding}px 0;
  text-align: center;
  font-size: 14px;
  color: ${colors.black650};
  font-weight: 500;
  align-items: center;
  flex-basis: 33.33%;

  div {
    width: 100%;
    height: ${orderBookFooterContentsHeight}px;
    line-height: ${orderBookFooterContentsHeight}px;
    border-left: 1px solid ${colors.black220};
    border-right: 1px solid ${colors.black220}; 
    padding: 0 12px;

  }
`;

export const OrderBookFooterCellLeft = styled(OrderBookFooterCell)`
  text-align: right;

  div {
    border: 0;  
  }
`;

export const OrderBookFooterCellRight = styled(OrderBookFooterCellLeft)`
  text-align: left;
`;
