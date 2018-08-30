import React from 'react';
import { connect } from 'react-redux';
import debounce from 'lodash.debounce';
import Flex from '../../atom/Flex';
import Icon from '../../atom/Icon';
import { TickersSearchInput } from './TickersSearch.styled';
import Box from '../../atom/Box';
import { IconButton } from '../../atom/Button';
import { updateSearchValue } from 'reducer/tickers/tickersSaga';
import { actions } from 'reducer/tickers/tickersReducer';

class TickersSearch extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleChange = debounce(
      props.updateSearchValue,
      300,
    );
  }

  render() {
    const { toggleShowFavorites, showFavorites } = this.props;
    return (
      <Flex
        height={38}
        py={4}
        pr={4}
        alignItems="center"
        borderBottom="1px solid #ededed"
      >
        <IconButton onClick={toggleShowFavorites}>
          <Icon type={showFavorites ? 'starred' : 'star'} />
        </IconButton>
        <Box
          flex="1 1"
        >
          <TickersSearchInput
            onChange={(e) => { this.handleChange(e.target.value); }}
          />
        </Box>
      </Flex>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateSearchValue: (value) => { dispatch(actions.updateSearchValue({ value })); },
  toggleShowFavorites: () => { dispatch(actions.toggleShowFavorites()); },
});

export default connect(
  null,
  mapDispatchToProps,
)(TickersSearch);
