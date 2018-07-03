import React from 'react';
import PropTypes from 'prop-types';
import 'intersection-observer'; // polyfill intersection observer for non-supporting browsers

class Waypoint extends React.Component {
  static buildThresholds(steps) {
    const thresholds = [];
    let i = 1.0;
    for (i; i <= steps; i += 1) {
      const ratio = i / steps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  constructor(props) {
    super(props);

    this.observer = null;

    this.state = {
      isIntersecting: false,
      intersectionRatio: 0,
    };
  }

  componentDidMount() {
    const { steps } = this.props;

    this.observer = new IntersectionObserver(
      (...args) => this.onObserve(...args),
      {
        threshold: Waypoint.buildThresholds(steps),
      },
    );

    this.observer.observe(this.el);
  }

  componentWillUnmount() {
    this.releaseObserver();
  }

  onObserve(entries) {
    entries.forEach((entry) => {
      
      this.setState({
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
      }, () => {
        const { isIntersecting } = this.state;
        const { runOnce } = this.props;
        if (isIntersecting && runOnce) {
          this.releaseObserver();
        }
      });
    });
  }

  releaseObserver() {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  render() {
    const { intersectionRatio, isIntersecting } = this.state;
    const { children } = this.props;

    return (
      <div
        ref={(e) => {
          this.el = e;
        }}
      >
        {children({
          intersectionRatio,
          isIntersecting,
        })}
      </div>
    );
  }
}

Waypoint.defaultProps = {
  steps: 1,
  runOnce: false,
};

Waypoint.propTypes = {
  steps: PropTypes.number,
  runOnce: PropTypes.bool,
};

export default Waypoint;
