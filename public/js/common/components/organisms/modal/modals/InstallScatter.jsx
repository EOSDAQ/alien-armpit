import React from 'react';
import Button from '../../../atom/Button';

const InstallScatter = props => (
  <div>
    <div></div>
    <h2>
      It seems Scatter is not yet installed in your browser
    </h2>
    <label>
      Why Scatter?
    </label>
    <p>
      Scatter provides Single Sign On (SSO). Your “private key” is never sent to any servers, so hackers don’t have a way of getting access to thousands of accounts at once.
    </p>
    <Button>
      Install Scatter Chrome extension
    </Button>
  </div>
);

export default InstallScatter;
