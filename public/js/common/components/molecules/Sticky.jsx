import React from 'react';

class Sticky extends React.Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);
    this.state = {
      style: {},
    };
  }

  componentDidMount() {
    document.addEventListener('scroll', this.onScroll);
    const { top } = this.container.getBoundingClientRect();
    this.setState({
      style: {
        top: top + window.scrollY,
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  onScroll(e) {
    // const { top, bottom } = this.state.containerRect;
    // this.container.style.transform = `translateY(${window.scrollY}px)`;
  }

  render() {
    const { style } = this.state;

    return (
      <div 
        ref={e => this.container = e}
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
        }}
      >
        {this.props.children(style)}
      </div>
    );
  }
}

export default Sticky;