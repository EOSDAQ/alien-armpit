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
  SignupWrapper,
  SignupHeader,
  SignupDesc,
} from './Signup.styled';
import SignupForm from './SignupForm';
import SentEmail from './sentEmail/SentEmail';
import { Redirect } from '@reach/router';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    }
  }

  componentDidMount() {
    this.props.resetSentEmail();
  }

  onSubmit({ email }) {
    const {
      name,
      createAccount,
    } = this.props;

    if (!name) {
      alert('need accountName');
      return;
    }

    this.setState({ email });
    createAccount({ email });
  }

  render() {
    const {
      t,
      authenticated,
      name,
      sentEmail,
    } = this.props;
    const {
      email,
    } = this.state;

    if (sentEmail) {
      return <SentEmail email={email} />;
    }

    return (
      <React.Fragment>
        <div>
          <Header />
          <Flex alignItems="center" justifyContent="center" pt={85} pb={85}>
            <SignupWrapper>
              <Icon type="logoText" width={130} />
              <SignupHeader>
                {t('signup.title')}
              </SignupHeader>
              <SignupDesc>
                {t('signup.desc').replace('${accountName}', name)}
              </SignupDesc>
              <SignupForm onSubmit={value => this.onSubmit(value)} />
            </SignupWrapper>
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
  resetSentEmail: () => dispatch(actions.resetSentEmail()),
});

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  translate('sign'),
)(Signup);
