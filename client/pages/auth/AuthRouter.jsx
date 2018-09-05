import React from 'react';
import { Router } from '@reach/router';
import Signup from './Signup';
import SigninOtp from './SigninOtp';
import ResendEmail from './ResendEmail';
import { Protected, ReverseProtected } from 'components/molecules/Protected';

const SignRouter = () => (
  <Router path="/">
    <ReverseProtected
      path="signup"
      showState={{ 'account.sentEmail': true }}
    >
      <Signup path="/" />
    </ReverseProtected>
    <Protected
      path="resend-email"
    >
      <ResendEmail path="/" />
    </Protected>
    <SigninOtp path="/signin-otp" />
  </Router>
);

export default SignRouter;
