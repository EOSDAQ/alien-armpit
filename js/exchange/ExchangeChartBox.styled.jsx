import styled from 'react-emotion';
import {
  SheetWrapper,
} from '../common/components/molecules/Sheet';
import { mixin } from '../common/css/typography';

export const ExchangeChartWrap = styled(SheetWrapper)`  
  height: 480px;
  width: 740px;  
`;

export const ExchangeChartHeader = styled('div')`
  display: flex;
  height: 61px;
  background-color: #fff;
  border-bottom: 1px solid #000;
  padding: 15px 20px;
`;

export const ExchangeChartHeaderCoinName = styled('div')`
  width: 141px;
  border-right: 1px solid #000;
  h4 {
    font-size: 18px;  
    font-weight: 700;
  }

  h5 {
    color: #8f9bb2;
    font-size: 12px;
    margin-top: 3px;
  }
`;

export const ExchangeChartHeaderInfoMid = styled('div')`
  width: 258px;
  padding-left: 11px;
  border-right: 1px solid #000;
`;

export const ExchangeChartHeaderInfo = styled('div')`
  font-size: 12px;  
  dt {
    display: inline-block;
    width: 53px;    
    font-weight: 500;
  }

  dd {
    display: inline-block;
  }
`;
