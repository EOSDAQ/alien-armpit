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

    thresholds.unshift(0); // for scroll direction detecting.
    thresholds.push(0.9);
    return thresholds;
  }

  constructor(props) {
    super(props);

    this.observer = null;
    this.prevY = 0;

    this.state = {
      direction: undefined,
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
      const yDiff = entry.boundingClientRect.y - this.prevY;
      this.prevY = entry.boundingClientRect.y;
          
      let direction;
      if (yDiff > 0) {
        direction = 'up';
      } else {
        direction = 'down';
      }

      this.setState({
        direction,
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
    const { intersectionRatio, isIntersecting, direction } = this.state;
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
          direction,
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
