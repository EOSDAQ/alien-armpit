import React from 'react';
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
        threshold: Waypoint.buildThresholds(steps || 1),
      },
    );

    this.observer.observe(this.el);
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  onObserve(entries) {
    entries.forEach((entry) => {
      this.setState({
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
      });
    });
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

export default Waypoint;
