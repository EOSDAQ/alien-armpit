import React from 'react';
import { ChartHeader, CoinInfo, CoinLabel, CoinName, CoinPriceSection, CoinPrice, CoinPriceChangeStat, CoinPriceLabel, CoinStat, CoinStats, CoinStatLabel, CoinStatValue } from './ExchangeChartHeader.styled';

const stats = [
  { name: 'high', value: 0.0039 },
  { name: 'low', value: 0.0038 },
  { name: 'volume', value: 36000000 },
]

const ExchangeChartHeader = () => (
  <ChartHeader>
    <CoinInfo>
      <CoinName>
        Everipedia
      </CoinName>
      <CoinLabel>
        IQ/EOS
      </CoinLabel>
    </CoinInfo>
    <CoinPriceSection>
      <CoinPrice>
        0.0039
        <CoinPriceLabel>
          EOS
        </CoinPriceLabel>
      </CoinPrice>
      <CoinPriceChangeStat>
        ^ 1.45%
      </CoinPriceChangeStat>
    </CoinPriceSection>
    <CoinStats>
      {stats.map(stat => (
        <CoinStat key={stat.value}>
          <CoinStatLabel>
            {stat.name}
          </CoinStatLabel>
          <CoinStatValue type={stat.name}>
            {stat.name === 'volume' ? stat.value.toLocaleString() : stat.value}
          </CoinStatValue>
        </CoinStat>
      ))}
    </CoinStats>
  </ChartHeader>
);

export default ExchangeChartHeader;
