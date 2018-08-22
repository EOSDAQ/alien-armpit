import React from 'react';
import { connect } from 'react-redux';
import {
  ChartHeader, CoinInfo, CoinLabel, CoinName, CoinPriceSection, CoinPrice,
  CoinPriceChangeStat, CoinPriceLabel, CoinStat, CoinStats, CoinStatLabel, CoinStatValue,
} from './ExchangeChartHeader.styled';
import { getExchangeParam, getRouteMatch } from 'reducer/selector';
import { toFixed } from 'utils/format';

const ExchangeChartHeader = ({ token }) => {
  const stats = [
    { name: 'high', value: token.highPrice },
    { name: 'low', value: token.lowPrice },
    { name: 'volume', value: token.volume / 10000 },
  ];

  return (
    <ChartHeader>
      <CoinInfo>
        <CoinName>
          {token.name}
        </CoinName>
        <CoinLabel>
          {token.symbol}
        </CoinLabel>
      </CoinInfo>
      <CoinPriceSection>
        <CoinPrice>
          {toFixed(4, token.currentPrice / 10000).toLocaleString()}
          <CoinPriceLabel>
            EOS
          </CoinPriceLabel>
        </CoinPrice>
        <CoinPriceChangeStat>
          {(token.currentPrice - token.prevPrice) / Math.max(token.prevPrice, 1) / 10000} %
        </CoinPriceChangeStat>
      </CoinPriceSection>
      <CoinStats>
        {stats.map(stat => (
          <CoinStat key={stat.value}>
            <CoinStatLabel>
              {stat.name}
            </CoinStatLabel>
            <CoinStatValue type={stat.name}>
              {toFixed(4, stat.value).toLocaleString()}
            </CoinStatValue>
          </CoinStat>
        ))}
      </CoinStats>
    </ChartHeader>
  );
}

const mapStateToProps = (state) => {
  const { params: { code } } = getRouteMatch(state, '/exchange/:code');
  let token = state.tokens[code];
  token.highPrice = 0.0039
  token.lowPrice = 0.0030

  return {
    token: state.tokens[code],
  };
}

export default connect(
  mapStateToProps,
)(ExchangeChartHeader);
