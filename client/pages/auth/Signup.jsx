import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { actions } from 'reducer/account/accountReducer';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/header/Header';
import Flex from 'components/atom/Flex';
import Icon from 'components/atom/Icon';
import {
  SigninWrapper,
  SigninHeader,
  SigninDesc,
} from './Signup.styled';
import SigninForm from './SignupForm';
import { Redirect } from '@reach/router';

class Signin extends React.Component {
  onSubmit({ email }) {
    const {
      name,
      createAccount,
    } = this.props;

    if (!name) {
      alert('need accountName');
      return;
    }

    createAccount({ email });
  }

  render() {
    const { t, authenticated, name } = this.props;
    // if (authenticated) {
    //   return <Redirect to="/" noThrow />;
    // }

    return (
      <React.Fragment>
        <div>
          <Header />
          <Flex alignItems="center" justifyContent="center" pt={85} pb={85}>
            <SigninWrapper>
              <Icon type="logoText" width={130} />
              <SigninHeader>
                {t('signin.title')}
              </SigninHeader>
              <SigninDesc>
                {t('signin.desc').replace('${accountName}', name)}
              </SigninDesc>
              <SigninForm onSubmit={value => this.onSubmit(value)} />
            </SigninWrapper>
          </Flex>
          <Footer />
        </div>
        {this.props.children}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => state.account;

const mapDispatchToProps = dispatch => ({
  createAccount: (payload) => dispatch(actions.createAccount(payload)),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('sign'),
)(Signin);
