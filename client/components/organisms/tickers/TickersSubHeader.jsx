import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import { IconButton } from '../../atom/Button';
import Icon from '../../atom/Icon';
import { colors } from '../../css/theme';
import { actions } from 'reducer/tickers/tickersReducer';
import Box from '../../atom/Box';
import { SheetHeadingRow, SheetCell } from '../../molecules/Sheet';
import { tickersSheetRowColumns } from '../../styleConstants';
import { tickersFields } from './tickerConstants';

const TickersSubHeader = (props) => {
  const {
    t,
    sort: { field, order },
    updateSort,
  } = props;

  return (
    <SheetHeadingRow
      columns={tickersSheetRowColumns}
    >
      {tickersFields.map((head) => {
        const sorted = head.field === field;
        const desc = order === 1;
        const label = t(`tickers.${head.field}`, { defaultValue: '' });
        return (
          <SheetCell key={head.field}>
            {label && (
              <React.Fragment>
                <Box mr={4}>
                  {label}
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
};

const mapStateToProps = state => ({
  sort: state.tickers.box.sort,
});

const mapDispatchToProps = dispatch => ({
  updateSort: field => dispatch(actions.updateSort({ field })),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('exchange')(TickersSubHeader));
