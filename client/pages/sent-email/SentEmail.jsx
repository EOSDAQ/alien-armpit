import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
// import { push } from 'connected-react-router';
import { staticPath } from 'constants/constants';
import Flex from 'components/atom/Flex';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/header/Header';
import {
  SentEmailGuide,
  SentEmailHeading,
  SentEmailDesc,
  SendEmailNotReceive,
  SentEmailResendLink,
  SentEmailImg,
} from './SentEmail.styled';

class SentEmail extends React.Component {
  handleResendClick(e) {
    const {
      redirectToSignin,
    } = this.props;
    e.preventDefault();
    redirectToSignin();
  }

  render() {
    const {
      t,
      location,
    } = this.props;

    const email = (location.state && location.state.email) ? location.state.email : '';
    const desc = t('sentEmail.desc').replace('|=email|', `<span>${email}</span>`);
    return (
      <div>
        <Header />
        <Flex justifyContent="center" pt={85} pb={85}>
          <SentEmailGuide>
            <SentEmailHeading>
              {t('sentEmail.title')}
            </SentEmailHeading>
            <SentEmailDesc dangerouslySetInnerHTML={{ __html: desc }} />
            <SendEmailNotReceive>
              {t('sentEmail.notReceive')}
              <SentEmailResendLink href="#" onClick={e => this.handleResendClick(e)}>
                {t('sentEmail.resend')}
              </SentEmailResendLink>
            </SendEmailNotReceive>
          </SentEmailGuide>
          <SentEmailImg src={`${staticPath.images}/mail-example.png`} />
        </Flex>
        <Footer />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // redirectToSignin: () => { dispatch(push('/signin')); },
});

export default connect(
  null,
  mapDispatchToProps,
)(translate('sign')(SentEmail));
