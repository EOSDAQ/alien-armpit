import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import { actions } from 'reducer/otp/otpReducer';
import {
  Page,
  Container,
  Wrap,
  Title,
  Desc,
  CodeInput,
} from './SigninOtp.styled';
import Header from 'components/organisms/header/Header';
import Footer from 'components/organisms/Footer';
import Curtain from 'components/molecules/Curtain';

class SigninOtp extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { signinWithOtp } = this.props;
    signinWithOtp(this.input.value);
  }

  render() {
    const { t } = this.props;
    return (
      <Curtain
        condition="signinWithOtp"
      >
        <Page>
          <Header />
          <Container>
            <Wrap>
              <Title>
                { t('googleOtp.titleSignin') }
              </Title>
              <Desc>
                { t('googleOtp.desc2')}
              </Desc>
              <div>
                <form onSubmit={(e) => { this.handleSubmit(e); }}>
                  <CodeInput
                    type="text"
                    innerRef={ref => this.input = ref}
                  />
                </form>
              </div>
            </Wrap>
          </Container>
          <Footer />
        </Page>
      </Curtain>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signinWithOtp: (code) => { dispatch(actions.signinWithOtp(code)); },
});

export default connect(
  null,
  mapDispatchToProps,
)(translate('sign')(SigninOtp));
