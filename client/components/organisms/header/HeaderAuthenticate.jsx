// @flow

import React from 'react';
import type { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Icon from '../../atom/Icon';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';
import { actions } from 'reducer/account/accountReducer';
import { ViewerIdenticon } from './HeaderAuthenticate.styled';
import Select from '../../molecules/Select';
import HeaderAccountMenu from './HeaderAccountMenu';
import type { AppState } from 'reducer/reducer';

type Props = {}
  & $Call<typeof mapStateToProps, AppState>
  & $Call<typeof mapDispatchToProps, *>;

const HeaderAuthenticate = (props: Props) => {
  const {
    authenticated,
    viewer,
    getScatterIdentity,
  } = props;

  if (viewer && authenticated) {
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
    <TextButton onClick={() => getScatterIdentity()}>
      <Flex alignItems="flex-end">
        <Text fontSize={14} mr={4}>
          Sign in with
        </Text>
        <Icon type="scatter" width={50} />
      </Flex>
    </TextButton>
  );
};

const mapStateToProps = ({ account }: AppState) => (account);

const mapDispatchToProps = (dispatch: Dispatch<*>) => ({
  getScatterIdentity: (payload) => {
    dispatch(actions.getScatterIdentity(payload));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAuthenticate);
