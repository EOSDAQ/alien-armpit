import React from 'react';
import Eos from 'eosjs';
import Identicon from 'identicon.js';
import Icon from '../../atom/Icon';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';

const Avatar = (props) => {
  return (
    <div 
      style={{
        borderRadius: '999rem',
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        width: 36,
        height: 36,
        border: '1px solid rgba(104, 247, 250, 0.25)',
        backgroundImage: `url(${props.src})`,
      }}
    />
  )
}

class HeaderAuthenticate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account: null,
    };

  }
  onSignIn() {
    if (window.scatter) {
      window.scatter
        .getIdentity({
          accounts: [{
            blockchain:'eos',
            host: 'ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com',
            port: 18888,
            protocol:'http',
            chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
          }],
          // personal: ['email'],
        })
        .then(identity => {
          const account = identity.accounts[0];

          const network = {
            blockchain:'eos',
            host: 'ec2-13-124-118-0.ap-northeast-2.compute.amazonaws.com',
            port: 18888,
            protocol:'http',
            chainId:'cf057bbfb72640471fd910bcb67639c22df9f92470936cddc1ade0e2f2e7dc4f'
          };

          const eos = scatter.eos( network, Eos, {} );

          eos.contract('eosdaq').then(async contract => {
            // code: 3090003
            // details: []
            // name: "unsatisfied_authorization"
            // what: "Provided keys, permissions, and delays do not satisfy declared authorizations"

            const acc = await eos.getAccount(account.name);
            const pubKey = acc.permissions.filter(p => p.perm_name === 'owner')[0].required_auth.keys[0].key;
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

            const updated = await eos.updateauth({
              account: account.name,
              permission: 'active',
              parent: 'owner',
              auth: {
                threshold: 1,
                keys: [
                  {
                    key: pubKey, 
                    weight:1
                  },
                ],
                accounts: [
                  {
                    permission: {
                      actor: 'eosdaq',
                      permission: 'eosio.code'
                    },
                    weight:1,
                  }
                ],
              },
            });

            // return;

            try {
              const order = await contract.askorder(account.name, 100, '3000.0000 SYS', '0.0000 SYS', '0.0000 ABC', {
                authorization: account.name,
                sign: true,
              });
            } catch(err) {
              if (typeof err === 'string') {
                const { error } = JSON.parse(err);
                if (error.code === 3090003) {
                }
              }
            }
          })
        })
        .catch(err => console.error(err));

    }
  }

  render() {
    const { account } = this.state;

    if (account) {
      return (
        <Flex alignItems="center">
          <Text fontSize={12} color="#eee" mr={4}>
            {'@' + account + ''}
          </Text>
          {this.state.identicon}
        </Flex>
      )
    }

    return (
      <TextButton onClick={() => this.onSignIn()}>
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

export default HeaderAuthenticate;
