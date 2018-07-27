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
