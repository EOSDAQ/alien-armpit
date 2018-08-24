import React from 'react';
import { Router } from '@reach/router';
import Signin from './Signin';
import SentEmail from './sentEmail/SentEmail';

const SignRouter = () => {
  return (
    <Router path="/">
      <Signin path="signin" />
      <SentEmail path="sent-email" />
    </Router>
  );
}

export default SignRouter;
