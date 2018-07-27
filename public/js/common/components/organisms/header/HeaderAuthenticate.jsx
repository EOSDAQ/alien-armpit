import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Eos from 'eosjs';
import Identicon from 'identicon.js';
import Icon from '../../atom/Icon';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';
import { actions } from 'reducer/account/accountReducer';
import { ViewerIdenticon, ViewerName } from './HeaderAuthenticate.styled';
import Select from '../../molecules/Select';
import HeaderAccountMenu from './HeaderAccountMenu';

class HeaderAuthenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
    };

  }
  onSignIn() {
    //         const updated = await eos.updateauth({
    //           account: account.name,
    //           permission: 'active',
    //           parent: 'owner',
    //           auth: {
    //             threshold: 1,
    //             keys: [
    //               {
    //                 key: pubKey, 
    //                 weight:1
    //               },
    //             ],
    //             accounts: [
    //               {
    //                 permission: {
    //                   actor: 'eosdaq',
    //                   permission: 'eosio.code'
    //                 },
    //                 weight:1,
    //               }
    //             ],
    //           },
    //         });

    //         // return;

    //         try {
    //           const order = await contract.askorder(account.name, 100, '3000.0000 SYS', '0.0000 SYS', '0.0000 ABC', {
    //             authorization: account.name,
    //             sign: true,
    //           });
    //         } catch(err) {
    //           if (typeof err === 'string') {
    //             const { error } = JSON.parse(err);
    //             if (error.code === 3090003) {
    //             }
    //           }
    //         }
    //       })
    //     })
    //     .catch(err => console.error(err));

    // }
  }

  render() {
    const { authenticated, viewer } = this.props;

    if (authenticated) {
      return (
        <Flex alignItems="center">
          <Select options={<HeaderAccountMenu viewer={viewer} />}>
            <ViewerIdenticon src={viewer.identicon} />
          </Select>
          {!viewer.authorized && <Redirect to="/register" />}
        </Flex>
      );
    }

    return (
      <TextButton onClick={this.props.getScatterIdentity}>
        <Flex alignItems="flex-end">
          <Text fontSize={14} mr={4}>
            Sign in with
          </Text>
          <Icon type="scatter" width={50} />
        </Flex>
      </TextButton>
    );
  }
}

const mapStateToProps = (state) => state.account;

const mapDispatchToProps = (dispatch) => ({
  getScatterIdentity: () => dispatch(actions.getScatterIdentity()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAuthenticate);
