import React from 'react';
import { connect } from 'react-redux';
import Box from '../../atom/Box';
import Button, { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import { actions } from '../../../../reducer/account/accountReducer';

const HeaderAccountMenu = ({ viewer, signOut }) => {
  return (
    <Box bg="#2f2f2f">
      authenticated as...
      <Text color="white">
        {viewer.name}
      </Text>
      <TextButton>
        Copy public key address [][]
      </TextButton>
      <TextButton
        onClick={signOut}
      >
        Sign out
      </TextButton>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.forgetScatterIdentity()),
})

export default connect(
  null,
  mapDispatchToProps,
)(HeaderAccountMenu);
