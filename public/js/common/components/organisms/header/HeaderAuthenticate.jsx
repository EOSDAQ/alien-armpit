import React from 'react';
import { connect } from 'react-redux';
import Eos from 'eosjs';
import Identicon from 'identicon.js';
import Icon from '../../atom/Icon';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';
import { actions } from 'reducer/account/accountReducer';
import { ViewerIdenticon, ViewerName } from './HeaderAuthenticate.styled';

class HeaderAuthenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
    };

  }
  onSignIn() {
    var options = {
      foreground: [103, 246, 249, 255],               // rgba black
      background: [19, 19, 19, 255],         // rgba white
      margin: 0.2,                              // 20% margin
      size: 40,                                // 420px square
      format: 'svg'                             // use SVG instead of PNG
    };

    this.setState({
      identicon: <Avatar src={'data:image/svg+xml;base64,' + new Identicon(pubKey, options).toString()} />,
      account: account.name,
    });

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
          <ViewerIdenticon
            src={viewer.identicon}
            onClick={this.props.forgetScatterIdentity}
          />
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
  forgetScatterIdentity: () => dispatch(actions.forgetScatterIdentity()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAuthenticate);
