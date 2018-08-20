import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'reducer/account/accountReducer';
import { AccountMenu, AccountMenuWelcome, AccountName, MenuActions, CopyPublicKey, MenuAction } from './HeaderAccountMenu.styled';
import Icon from '../../atom/Icon';

let publicKeyEl = null;

const HeaderAccountMenu = ({ name, signOut }) => {
  return (
    <AccountMenu>
      <AccountMenuWelcome>
        Welcome!
      </AccountMenuWelcome>
      <AccountName>
        {name}
      </AccountName>
      <MenuActions>
        <MenuAction
          onClick={signOut}
        >
          Sign out
        </MenuAction>
      </MenuActions>
    </AccountMenu>
  );
}

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(actions.forgetScatterIdentity()),
})

export default connect(
  null,
  mapDispatchToProps,
)(HeaderAccountMenu);
