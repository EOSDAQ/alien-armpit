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
import Query from '../../molecules/Query';

class HeaderAuthenticate extends React.Component {
  render() {
    const {
      account,
      signIn,
      signUp,
    } = this.props;

    const {
      authenticated,
      viewer,
    } = account;

    return (
      <Query action={actions.getViewer()}>
        {({ loading, error }) => {
          if (loading) return null;
          if (error) {
            return (
              <div>
                <TextButton onClick={() => signIn()}>
                  <Flex alignItems="flex-end">
                    <Text fontSize={14} mr={4}>
                      Sign In
                    </Text>
                  </Flex>
                </TextButton>
                <TextButton onClick={() => signUp()}>
                  <Flex alignItems="flex-end">
                    <Text fontSize={14} mr={4}>
                      Sign Up with
                    </Text>
                    <Icon type="scatter" width={50} />
                  </Flex>
                </TextButton>
              </div>
            );
          }

          if (!viewer) {
            return null;
          }
          
          return (
            <Flex alignItems="center">
              <Select options={<HeaderAccountMenu {...viewer} />}>
                <ViewerIdenticon 
                  dangerouslySetInnerHTML={{__html: viewer.identicon }}
                />
              </Select>
            </Flex>
          );
        }}
      </Query>
    );
  }
}

const mapStateToProps = ({ account }) => ({ account });

const mapDispatchToProps = dispatch => ({
  signUp: payload => dispatch(actions.signUp(payload)),
  signIn: payload => dispatch(actions.signIn(payload)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderAuthenticate);
