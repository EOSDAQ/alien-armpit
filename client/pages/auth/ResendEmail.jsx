import React from 'react';
import { translate } from 'react-i18next';
import { connect } from 'react-redux';
import Form from 'components/molecules/Form';
import Input from 'components/atom/Input';
import Button from 'components/atom/Button';
import { actions } from 'reducer/account/accountReducer';
import Header from 'components/organisms/header/Header';
import SentEmail from './sentEmail/SentEmail';

class ResendEmail extends React.Component {
  resendEmail(values) {
    const { resendEmail } = this.props;
    resendEmail(values);
  }

  componentDidMount() {
    this.props.resetSentEmail();
  }

  render() {
    const {
      t,
      sentEmail,
    } = this.props;

    if (sentEmail) {
      return <SentEmail email={email} />;
    }

    return (
      <div>
        <Header />
        <div>
          <Form
            onSubmit={(values) => this.resendEmail(values)}
          >
            {({ onChange, submit }) => (
              <div>
                <Input type="email" name="email" onChange={onChange} />
                <Button
                  withChrome
                  onClick={e => submit(e)}
                >
                  {t('sentEmail.resend')}
                </Button>
              </div>
            )}
          </Form>
        </div>
      </div>
    );
  }
};

const mapStateToProps = state => state.account;

const mapDispatchToProps = dispatch => ({
  resendEmail: (payload) => { 
    dispatch(actions.resendEmail(payload))
  },
  resetSentEmail: () => dispatch(actions.resetSentEmail()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(ResendEmail));
