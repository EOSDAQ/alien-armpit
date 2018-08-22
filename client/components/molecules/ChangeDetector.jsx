import React from 'react';
import { Highlight } from './ChangeDetector.styled';

class ChangeDetector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      change: null,
      timerId: null,
    };
  }

  componentDidUpdate(prevProps) {
    const { value: prevValue } = prevProps;
    const { value } = this.props;
    if (!prevValue || !value) {
      return;
    }

    if (prevValue > value) {
      this.setState({ change: 'down' });
      this.reset();
    } else if (prevValue < value) {
      this.setState({ change: 'up' });
      this.reset();
    }
  }

  reset() {
    const { timerId } = this.state;

    if (timerId) {
      clearTimeout(timerId);
    }

    const that = this;
    const duration = 500;
    const id = setTimeout(() => {
      that.setState({
        change: null,
        timerId: null,
      });
    }, duration);
    this.setState({ timerId: id });
  }

  render() {
    const { change } = this.state;
    return (
      <Highlight change={change} />
    );
  }
}

export default ChangeDetector;
