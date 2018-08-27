import React from 'react';
import { Router } from '@reach/router';
import Signup from './Signup';
import SentEmail from './sentEmail/SentEmail';

const SignRouter = () => {
  return (
    <Router path="/">
      <Signup path="signup" />
      <SentEmail path="sent-email" />
    </Router>
  );
}

export default SignRouter;
