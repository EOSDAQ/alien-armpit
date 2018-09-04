import React from 'react';
import { connect } from 'react-redux';
import SockJS from 'sockjs-client';
import { actions } from 'reducer/socket/socketReducer';

class Socket extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sockjs: null,
    };
  }

  componentDidMount() {
    const { handleMessage } = this.props;
    const targetUrl = gConfig ? gConfig.socketUrl : '';
    const sockjs = new SockJS(targetUrl);
    sockjs.onmessage = (e) => {
      handleMessage(e.msg);
    };
    this.setState({ sockjs });
  }

  componentWillUnmount() {
    const { sockjs } = this.state;
    sockjs.close();
  }

  render() {
    return (
      <div />
    );
  }
}

const mapDispatchToProps = dispatch => ({
  handleMessage: (msg) => { dispatch(actions.receiveMessage(msg)); },
});

export default connect(
  null,
  mapDispatchToProps,
)(Socket);
