import React from 'react';
import { connect } from 'react-redux';

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.pollAgent = null;
  }

  componentDidMount() {
    const { cache } = this.props;
    if (!cache) {
      this.dispatchAction();
    }
  }

  componentWillUnmount() {
    if (this.pollAgent) {
      clearInterval(this.pollAgent);
      this.pollAgent;
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatching, cacheKey, cache } = this.props;
    if (dispatching) return;

    if (cacheKey != prevProps.cacheKey) {
      if (!cache) {
        this.dispatchAction();
      }
    }
  }

  dispatchAction() {
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
      }
    };

    dispatch(enhancedAction);
  }

  render() {
    const defaultCache = {
      loading: true,
      error: null,
    }

    let { cache } = this.props;
    if (!cache) {
      cache = defaultCache;
    }
    return this.props.children(cache);
  }
}

const mapStateToProps = (state, props) => {
  let { action } = props;
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
)(Query);
