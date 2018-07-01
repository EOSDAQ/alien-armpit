import React from 'react';
import 'intersection-observer'; // polyfill intersection observer for non-supporting browsers

class Waypoint extends React.Component {
  constructor(props) {
    super(props);

    this.observer = null;

    this.state = {
      isIntersecting: false,
      intersectionRatio: 0,
    }
  }

  componentDidMount() {
    this.observer = new IntersectionObserver(
      (...args) => this.onObserve(...args),
      {
        threshold: this.buildThresholds(this.props.steps || 1)
      },
    );

    this.observer.observe(this.el)
  }

  componentWillUnmount() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  onObserve(entries, observer) {
    entries.forEach((entry) => {
      this.setState({
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
      })
    })
  }

  buildThresholds(steps) {
    let thresholds = [];
    let i = 1.0;
    for (i; i <= steps; i++) {
      let ratio = i / steps;
      thresholds.push(ratio);
    }

    thresholds.push(0);
    return thresholds;
  }

  render() {
    const { intersectionRatio, isIntersecting } = this.state;
    return (
      <div ref={e => this.el = e}>
        {this.props.children({
          intersectionRatio,
          isIntersecting,
        })}
      </div>
    )
  }
}

export default Waypoint;
