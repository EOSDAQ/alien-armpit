import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from '@reach/router';

const success = { success: true };
const fail = { success: false, to: null };

class Curtain extends React.PureComponent {
  signinWithOtpReverse() {
    fail.to = <Redirect to="/signin-otp" noThrow />;
    const { viewer, authorized } = this.props;
    if (!viewer) {
      return success;
    }
    if (viewer.otpConfirm && !authorized.otp) {
      return fail;
    }
    return success;
  }

  signinWithOtp() {
    fail.to = <Redirect to="/" noThrow />;
    const { viewer, authorized } = this.props;
    if (!viewer) {
      return fail;
    }
    if (viewer.otpConfirm && !authorized.otp) {
      return success;
    }
    return fail;
  }

  render() {
    const {
      condition,
      children,
      error,
    } = this.props;
    const result = this[condition]();
    if (result.success) {
      return children;
    }
    return error || result.to || null;
  }
}

const mapStateToProps = ({ account }) => ({
  ...account,
});

export default connect(
  mapStateToProps,
)(Curtain);
