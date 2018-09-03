import React from 'react';
import { Router } from '@reach/router';
import Signup from './Signup';
import ResendEmail from './ResendEmail';
import { Protected, ReverseProtected } from 'components/molecules/Protected';

const SignRouter = () => {
  return (
    <Router path="/">
    	<ReverseProtected
        path="signup"
        showState={{ "account.sentEmail": true }}
      >
    		<Signup path="/" />
    	</ReverseProtected>
      <Protected
        path="resend-email"
      >
        <ResendEmail path="/" />   
      </Protected>
    </Router>
  );
}

export default SignRouter;
