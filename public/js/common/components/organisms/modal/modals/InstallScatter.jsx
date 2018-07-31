import React from 'react';
import Button from '../../../atom/Button';
import { Title, Description, WhyLabel } from './InstallScatter.styled';
import Icon from '../../../atom/Icon';
import Text from '../../../atom/Text';

const InstallScatter = props => (
  <div>
    <Title>
      It seems Scatter is not yet installed in your browser
    </Title>
    <WhyLabel>
      Why Scatter?
    </WhyLabel>
    <Description>
      Scatter provides Single Sign On (SSO). Your “private key” is never sent to any servers, so hackers don’t have a way of getting access to thousands of accounts at once.
    </Description>
    <Button primary>
      <Text mr={4}>
        Install
      </Text>
      <Icon type="scatter" width={50} />
      <Text ml={4}>
        Chrome extension
      </Text>
    </Button>
  </div>
);

export default InstallScatter;
