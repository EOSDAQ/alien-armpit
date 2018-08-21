import React from 'react';
import { connect } from 'react-redux';

class Query extends React.Component {
  constructor(props) {
    super(props);
    this.pollAgent = null;
  }

  componentDidMount() {
    const { cache } = this.props;
    // insert validation logic.
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

  componentWillReceiveProps(nextProps) {
    if (this.props.cacheKey !== nextProps.cacheKey) {
      if (!nextProps.cache) {
        setTimeout(() => this.dispatchAction(), 0);
      }
    }
  }

  dispatchAction() {
    const {
      dispatch,
      action,
      cacheKey,
      pollInterval,
    } = this.props;

    const enhancedAction = {
      ...action,
      payload: {
        ...action.payload,
        cacheKey,
      }
    };

    dispatch(enhancedAction);

    // if (pollInterval) {
    //   this.pollAgent = setInterval(() => {
    //     dispatch(enhancedAction)
    //   }, pollInterval);
    // }
  }

  render() {
    const defaultCache = {
      loading: true,
      data: null,
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
  const cacheKey = `${action.type}:${JSON.stringify(action.payload)}`;

  return {
    cacheKey,
    cache: state.api[cacheKey],
  };
}

export default connect(
  mapStateToProps,
)(Query);
