import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { actions } from 'reducer/signin/signinReducer';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/header/Header';
import Flex from 'components/atom/Flex';
import Icon from 'components/atom/Icon';
import {
  SigninWrapper,
  SigninHeader,
  SigninDesc,
} from './Signin.styled';
import SigninForm from './SigninForm';
import { navigate } from '@reach/router';

class Signin extends React.Component {
  onSubmit({ email }) {
    const {
      name,
      sendConfirmEmail,
    } = this.props;

    if (!name) {
      alert('need accountName');
      return;
    }

    sendConfirmEmail({
      accountName: name,
      email,
    });
    
    navigate('/sent-email', {
      state: { email },
    });
  }

  render() {
    const { t, name } = this.props;

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
  sendConfirmEmail: (email) => { dispatch(actions.sendConfirmEmailSaga(email)); },
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('sign'),
)(Signin);
