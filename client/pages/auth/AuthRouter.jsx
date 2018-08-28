import React from 'react';
import { Router } from '@reach/router';
import Signup from './Signup';
import SentEmail from './sentEmail/SentEmail';
import Protected from 'components/molecules/Protected';

const SignRouter = () => {
  return (
    <Router path="/">
      <Signup path="signup" />
      <Protected path="sent-email">
        <SentEmail path="/" />
      </Protected>
    </Router>
  );
}

export default SignRouter;
