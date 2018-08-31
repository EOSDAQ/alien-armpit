import React from 'react';
import { connect } from 'react-redux';

class Mutation extends React.Component {
  componentDidMount() {

  }

  act(payload) {
    const { 
      dispatch,
      action,
      cacheKey,
    } = this.props;

    const enhancedAction = {
      ...action,
      payload: {
        ...action.payload,
        cacheKey,
      },
    };

    dispatch(enhancedAction);
  }

  render() {
    const { cache } = this.props;
    const defaultCache = {
      loading: true,
      error: null,
    }

    return this.props.children(
      (payload) => this.act(payload),
      cache || defaultCache,
    );
  }
}

const mapStateToProps = (state, props) => {
  const { action } = props;
  const payload = action.payload
    ? ':' + JSON.stringify(action.payload)
    : '';
  
  const cacheKey = `${action.type}${payload}`;
  return {
    cacheKey,
    dispatching: state.api.dispatching,
    cache: state.api[cacheKey],
  };
}

export default connect(
  mapStateToProps,
)(Mutation);
