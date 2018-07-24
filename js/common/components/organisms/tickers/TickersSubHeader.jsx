import React from 'react';
import { connect } from 'react-redux';

import { IconButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import { colors } from '../../../css/theme';
import { actions } from '../../../../reducer/tickers/tickersReducer';
import Box from '../../atom/Box';
import { SheetHeadingRow, SheetCell } from '../../molecules/Sheet';
import { tickersSheetRowColumns } from '../../../constants/styleConstants';

const heads = [
  { label: null, field: 'favorite' },
  { label: '코인이름', field: 'coinName' },
  { label: '현재가', field: 'currentPrice' },
  { label: '전일대비', field: 'dayChange' },
  { label: '거래량', field: 'dayVolume' },
];

const TickersSubHeader = ({
  sort: { field, order },
  updateSort,
}) => (
  <SheetHeadingRow
    columns={tickersSheetRowColumns}
  >
    {heads.map((head) => {
      const sorted = head.field === field;
      const desc = order === 1;

      return (
        <SheetCell key={head.label}>
          {head.label && (
            <React.Fragment>
              <Box mr={4}>
                {head.label}
              </Box>
              <IconButton
                small
                onClick={() => updateSort(head.field)}
              >
                <Icon
                  type="sort"
                  style={{
                    transform: sorted && desc && 'rotate(180deg)',
                  }}
                  fill={sorted ? colors.primary500 : colors.grey200}
                />
              </IconButton>
            </React.Fragment>
          )}
        </SheetCell>
      );
    })}
  </SheetHeadingRow>
);

const mapStateToProps = state => ({
  sort: state.tickers.box.sort,
});

const mapDispatchToProps = dispatch => ({
  updateSort: field => dispatch(actions.updateSortSaga({ field })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TickersSubHeader);
