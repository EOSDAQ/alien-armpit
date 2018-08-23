import React from 'react';
import { connect } from 'react-redux';
import { setScatter } from 'api/scatter';
import Icon from '../../atom/Icon';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';
import { actions } from 'reducer/account/accountReducer';
import { ViewerIdenticon } from './HeaderAuthenticate.styled';
import Select from '../../molecules/Select';
import HeaderAccountMenu from './HeaderAccountMenu';

class HeaderAuthenticate extends React.Component {
  render() {
    const {
      account,
      getScatterIdentity,
    } = this.props;

    const {
      authenticated,
      name,
      identicon,
    } = account;

    if (authenticated) {
      return (
        <Flex alignItems="center">
          <Select options={<HeaderAccountMenu {...account} />}>
            <ViewerIdenticon 
              dangerouslySetInnerHTML={{__html: identicon }}
            />
          </Select>
        </Flex>
      );
    }

    return (
      <TextButton onClick={() => getScatterIdentity({ showInstallMessage: true })}>
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

const mapStateToProps = ({ account }) => ({ account });

const mapDispatchToProps = dispatch => ({
  getScatterIdentity: payload => dispatch(actions.getScatterIdentity(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAuthenticate);
