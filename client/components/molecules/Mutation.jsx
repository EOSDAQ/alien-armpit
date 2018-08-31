import React from 'react';
import { connect } from 'react-redux';
import { buildActionCacheKey } from 'utils/utils';

class Mutation extends React.Component {
  componentDidMount() {
    const { actOnMount, cache } = this.props;
    if (actOnMount && !cache) {
      this.act();
    }
  }

  act(payload) {
    let { 
      dispatch,
      action,
      cacheKey,
    } = this.props;

    if (typeof action == 'function') {
      // deferred mutation

       action = action(payload);
       cacheKey = buildActionCacheKey(action);
    }

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
      loading: false,
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
