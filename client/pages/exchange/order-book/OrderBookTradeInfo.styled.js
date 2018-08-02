import styled from 'styled-components';
import { mixin } from 'components/css/typography';

export const OrderBookTradeInfoWrapper = styled('div')`
  display: flex;
  flex-direction: column; 
  flex-basis: 33.33%; 
  padding: 0 12px;
`;

export const OrderBookTradeInfoAmountRow = styled('div')`
  margin-top: 30px;
  dt {
    ${mixin.tradeLabel}
  }
`;

export const OrderBookTradeInfoAmount = styled('div')`
  ${mixin.tradeNum}
  text-align: right;
  margin-top: 6px;
`;

export const OrderBookTradeInfoUnit = styled('span')`
  ${mixin.radeTradeUnit}
  padding-left: 4px;
`;

export const OrderBookTradeInfoPriceRow = styled('div')`
  margin-top: 20px;
  dt {
    ${mixin.tradeLabel}
  }
`;

export const OrderBookTradeInfoPrice = styled('div')`
  ${mixin.tradeNum}
  display: inline-block;
  padding-left: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  float: right;
  text-align: right;
  vertical-align: top;
  height: 20px;
`;
