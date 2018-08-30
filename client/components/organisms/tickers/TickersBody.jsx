import React from 'react';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import { scrollbarsOptions } from 'constants/constants';
import { actions } from 'reducer/tokens/tokensReducer';
import Ticker from './Ticker';

const toMillion = (number) => {
  const value = (number / 1.0e+6).toString();
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

class TickersBody extends React.Component {
  render() {
    const {
      tokens,
      toggleFavorite,
    } = this.props;

    const scrollStyle = { style: { height: 360 } };
    const scrollOptions = Object.assign({}, scrollbarsOptions, scrollStyle);
  
    return (
      <Scrollbars {...scrollOptions}>
        {tokens.map((token) => {
          return (
            <Ticker
              key={token.pair}
              token={token}
              onToggleFavorite={toggleFavorite}
            />
          );
        })}
      </Scrollbars>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  toggleFavorite: (pair) => { dispatch(actions.toggleFavorite({ pair })); },
});

export default connect(
  null,
  mapDispatchToProps,
)(TickersBody);
