import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { TextButton } from '../../atom/Button';
import Text from '../../atom/Text';
import Flex from '../../atom/Flex';
import { actions } from 'reducer/account/accountReducer';
import { ViewerIdenticon, AuthLink } from './HeaderAuthenticate.styled';
import Select from '../../molecules/Select';
import HeaderAccountMenu from './HeaderAccountMenu';
import Query from '../../molecules/Query';

class HeaderAuthenticate extends React.Component {
  render() {
    const {
      account,
      t,
    } = this.props;

    const {
      viewer,
    } = account;

    return (
      <Query action={actions.getViewer()}>
        {({ loading, error }) => {
          if (loading) return null;
          if (error) {
            return (
              <div>
                <AuthLink to="#" onClick={_ => this.props.signIn()}>
                  {t('signin')}
                </AuthLink>
                <AuthLink to="/signup">
                  {t('signup')}
                </AuthLink>
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
  signIn: p => dispatch(actions.signIn(p)),
})

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('gnb'),
)(HeaderAuthenticate);
