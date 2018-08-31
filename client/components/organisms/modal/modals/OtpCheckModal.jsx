import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { actions } from 'reducer/otp/otpReducer';
import { translate } from 'react-i18next';
import {
  Wrap,
  Title,
  Desc,
  CodeInput,
} from './OtpModal.styled';
import Form from '../../../molecules/Form';
import Mutation from '../../../molecules/Mutation';

class OtpCheckModal extends React.PureComponent {
  render() {
    const { t, viewer } = this.props;

    return(
      <Mutation
        action={actions.validateOtpSaga}
      >
        {(validate, { loading, error }) => {
          return (
            <Wrap>
              <Title>
                { t('googleOtp.title2')}
              </Title>
              <Desc>
                { t('googleOtp.desc2')}
              </Desc>
              <div>
                <Form onSubmit={({ code }) => {
                  validate({
                    code,
                    accountName: viewer.accountName,
                  });
                }}>
                  {({ onChange }) => (
                    <CodeInput 
                      type="text"
                      name="code"
                      onChange={(e) => onChange(e)}  
                    />
                  )}
                </Form>
              </div>
            </Wrap>
          );
        }}
      </Mutation>
    );
  }
}

const mapStateToProps = ({ account }) => ({ viewer: account.viewer });

export default compose(
  connect(mapStateToProps),
  translate('sign')
)(OtpCheckModal);
