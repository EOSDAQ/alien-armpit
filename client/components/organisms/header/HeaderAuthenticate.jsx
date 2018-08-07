import React from 'react';
import { connect } from 'react-redux';
import Icon from '../../atom/Icon';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';
import { actions } from 'reducer/account/accountReducer';
import { ViewerIdenticon } from './HeaderAuthenticate.styled';
import Select from '../../molecules/Select';
import HeaderAccountMenu from './HeaderAccountMenu';
import { setScatter } from 'reducer/account/accountApi';

class HeaderAuthenticate extends React.Component {
  componentDidMount() {
    const { getScatterIdentity } = this.props;
    document.addEventListener('scatterLoaded', () => {
      setScatter();
      getScatterIdentity();
    });
  }

  render() {
    const {
      authenticated,
      viewer,
      getScatterIdentity,
    } = this.props;
  
    if (viewer && authenticated) {
      return (
        <Flex alignItems="center">
          <Select options={<HeaderAccountMenu viewer={viewer} />}>
            <ViewerIdenticon src={viewer.identicon} />
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

const mapStateToProps = ({ account }) => (account);

const mapDispatchToProps = dispatch => ({
  getScatterIdentity: payload => dispatch(actions.getScatterIdentity(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAuthenticate);
