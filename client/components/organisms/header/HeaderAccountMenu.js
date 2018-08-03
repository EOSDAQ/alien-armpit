import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'reducer/account/accountReducer';
import { AccountMenu, AccountMenuWelcome, AccountName, MenuActions, CopyPublicKey, MenuAction } from './HeaderAccountMenu.styled';
import Icon from '../../atom/Icon';

let publicKeyEl = null;

const HeaderAccountMenu = ({ viewer, signOut }) => {
  console.log('HeaderAccountMenu', viewer);
  return (
    <AccountMenu>
      <AccountMenuWelcome>
        Welcome!
      </AccountMenuWelcome>
      <AccountName>
        {viewer.name}
      </AccountName>
      <MenuActions>
        <CopyPublicKey onClick={() => {
          publicKeyEl.select();          
          document.execCommand('copy');
        }}>
          Copy public key
          <Icon type="copy" width={20} />
          <textarea
            style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}
            value={viewer.publicKey}
            ref={e => publicKeyEl = e}
          />
        </CopyPublicKey>
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
