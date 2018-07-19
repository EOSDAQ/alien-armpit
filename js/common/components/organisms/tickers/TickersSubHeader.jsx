import React from 'react';
import { connect } from 'react-redux';

import {
  FavoriateHeader,
  CoinNameHeader,
  CurrentPriceHeader,
  DayChangeHeader,
  DayVolumeHeader,
} from './TickersSubHeader.styled';
import { SheetRow } from '../../molecules/Sheet';

import { IconButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import theme from '../../../css/theme';
import { actions } from '../../../../reducer/tickers/tickersReducer';

const heads = [
  { label: '코인이름', field: 'coinName' },
  { label: '현재가', field: 'currentPrice' },
  { label: '전일대비', field: 'dayChange' },
  { label: '거래량', field: 'dayVolume' },
];

const TickersSubHeader = ({
  sort: { field, order },
  updateSort,
}) => (
  <SheetRow>
    <FavoriateHeader />
    {heads.map((head) => {
      const sorted = head.field === field;
      const desc = order === 1;

      return (
        <div key={head.field}>
          {head.label}
          <IconButton
            small
            onClick={() => updateSort(head.field)}
          >
            <Icon
              type="sort"
              style={{
                transform: sorted && desc && 'rotate(180deg)',
              }}
              fill={sorted ? theme.colors.blue500 : theme.colors.grey200}
            />
          </IconButton>
        </div>
      );
    })}
  </SheetRow>
);

const mapStateToProps = state => ({
  sort: state.tickers.sort,
});

const mapDispatchToProps = dispatch => ({
  updateSort: field => dispatch(actions.updateSort({ field })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TickersSubHeader);
