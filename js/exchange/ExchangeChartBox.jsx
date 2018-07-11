import React from 'react';
import {
  ExchangeChartWrap,
  ExchangeChartHeader,
  ExchangeChartHeaderCoinName,
  ExchangeChartHeaderInfoMid,
  ExchangeChartHeaderInfo,
} from './ExchangeChartBox.styled';

const ExchangeChartBox = () => (
  <ExchangeChartWrap>
    <ExchangeChartHeader>
      <ExchangeChartHeaderCoinName>
        <h4>
          이오스닥
        </h4>
        <h5>
          (EosDAC)
        </h5>
      </ExchangeChartHeaderCoinName>
      <ExchangeChartHeaderInfoMid>
        <ExchangeChartHeaderInfo>
          <div>
            <dt>
              현재가
            </dt>
            <dd>
              10020
            </dd>
          </div>
          <div>
            <dt>
              전일대비
            </dt>
            <dd>
              +1.21%120
            </dd>
          </div>
        </ExchangeChartHeaderInfo>
      </ExchangeChartHeaderInfoMid>
    </ExchangeChartHeader>
  </ExchangeChartWrap>
);

export default ExchangeChartBox;
