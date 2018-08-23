import React from 'react';
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

class Signin extends React.Component {
  onSubmit(formData) {
    const data = formData;
    const {
      viewer,
      sendConfirmEmail,
      redirectToSentEmail,
    } = this.props;

    if (!viewer || !viewer.name) {
      alert('need accountName');
      return;
    }

    data.accountName = viewer.name;
    sendConfirmEmail(data);
    redirectToSentEmail(data.email);
  }

  render() {
    const { t } = this.props;
    return (
      <div>
        <Header />
        <Flex alignItems="center" justifyContent="center" pt={85} pb={85}>
          <SigninWrapper>
            <Icon type="logoText" width={130} />
            <SigninHeader>
              {t('signin.title')}
            </SigninHeader>
            <SigninDesc dangerouslySetInnerHTML={{ __html: t('signin.desc') }} />
            <SigninForm onSubmit={value => this.onSubmit(value)} />
          </SigninWrapper>
        </Flex>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.account.viewer,
});

const mapDispatchToProps = dispatch => ({
  sendConfirmEmail: (email) => { dispatch(actions.sendConfirmEmailSaga(email)); },
  // redirectToSentEmail: (email) => {
  //   dispatch(push({
  //     pathname: '/sentEmail',
  //     state: { email },
  //   }));
  // },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(Signin));
