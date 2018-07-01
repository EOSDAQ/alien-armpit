import React from 'react';
import 'intersection-observer'; // polyfill intersection observer for non-supporting browsers

class Waypoint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isIntersecting: false,
      intersectionRatio: 0,
    }
  }

  componentDidMount() {
    const observer = new IntersectionObserver(
      (...args) => this.onObserve(...args),
      this.props.options,
    );

    observer.observe(this.el)
  }

  onObserve(entries, observer) {
    entries.forEach((entry) => {
      this.setState({
        isIntersecting: entry.isIntersecting,
        intersectionRatio: entry.intersectionRatio,
      })
    })
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
