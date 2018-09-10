import React from 'react';
import { connect } from 'react-redux';

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.pollAgent = null;
  }

  componentDidMount() {
    const { cache, pollInterval } = this.props;
    if (!cache) {
      this.dispatchAction();
    }

    if (pollInterval) {
      this.pollAction();
    }
  }

  componentWillUnmount() {
    if (this.pollAgent) {
      clearInterval(this.pollAgent);
      this.pollAgent;
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatching, cacheKey, cache, pollInterval } = this.props;
    if (dispatching) return;

    if (cacheKey != prevProps.cacheKey) {
      this.clearPollAgent();

      if (pollInterval) {
        this.pollAction();
      }

      if (!cache) {
        this.dispatchAction();
      }
    }
  }

  clearPollAgent() {
    let { pollAgent } = this;
    if (pollAgent) {
      clearInterval(pollAgent);
      pollAgent = null;
    }
    return;
  }

  pollAction() {
    const { pollInterval } = this.props;
    this.clearPollAgent();

    this.pollAgent = setInterval(() => {
      this.dispatchAction(true);
    }, pollInterval);
  }

  dispatchAction(poll) {
    const {
      dispatch,
      action,
      cacheKey,
    } = this.props;

    const enhancedAction = {
      ...action,
      payload: {
        ...action.payload,
        poll,
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
