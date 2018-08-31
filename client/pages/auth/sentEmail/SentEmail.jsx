import React from 'react';
import { connect } from 'react-redux';
import { translate, Trans } from 'react-i18next';
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
  ResendEmail,
} from './SentEmail.styled';
import { Container } from 'components/atom/Box';
import Form from 'components/molecules/Form';
import Input from 'components/atom/Input';
import Button from 'components/atom/Button';
import { actions } from 'reducer/account/accountReducer';
import { Redirect } from '@reach/router';

class SentEmail extends React.Component {
  resendEmail(values) {
    const { resendEmail } = this.props;
    resendEmail(values);
  }

  render() {
    const {
      t,
      email,
      emailConfirm,
    } = this.props;

    // if (emailConfirm) {
    //   return <Redirect to="/" noThrow />
    // }

    const desc = t('sentEmail.desc').replace('|=email|', `<span>${email}</span>`);

    return (
      <Flex 
        height="100vh"
        flexDirection="column"
      >
        <Header />
        <Container flex={1}>
          <Flex justifyContent="center" pt={85} pb={85}>
            <SentEmailGuide>
              <SentEmailHeading>
                {t('sentEmail.title')}
              </SentEmailHeading>
              <SentEmailDesc>
                {desc}
              </SentEmailDesc>
              <SendEmailNotReceive>
                {t('sentEmail.notReceive')}
              </SendEmailNotReceive>
              <ResendEmail>
                <Form
                  onSubmit={(values) => this.resendEmail(values)}
                >
                  {({ onChange, submit }) => (
                    <div>
                      <Input type="email" name="email" onChange={onChange} />
                      <Button
                        onClick={e => submit(e)}
                      >
                        {t('sentEmail.resend')}
                      </Button>
                    </div>
                  )}
                </Form>
              </ResendEmail>
            </SentEmailGuide>
            <SentEmailImg src={`${staticPath.images}/mail-example.png`} />
          </Flex>
        </Container>
        <Footer />
      </Flex>
    );
  }
}

const mapStateToProps = state => state.account;

const mapDispatchToProps = dispatch => ({
  resendEmail: (payload) => { 
    dispatch(actions.resendEmail(payload))
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(SentEmail));
