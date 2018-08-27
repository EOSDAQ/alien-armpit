import React from 'react';
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

class OtpCheckModal extends React.Component {
  constructor(props) {
    super(props);
    this.codeInput = React.createRef();
  }

  handleSubmit({ code }) {
    const { validate, account } = this.props;
    if (code.length !== 6) {
      return;
    }
    validate({
      code,
      accountName: account.name,
    });
  }

  render() {
    const { t } = this.props;

    return(
      <Wrap>
        <Title>
          { t('googleOtp.title2')}
        </Title>
        <Desc>
          { t('googleOtp.desc2')}
        </Desc>
        <div>
          <Form onSubmit={(values) => this.handleSubmit(values)}>
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
  }
}

const mapStateToProps = ({ account }) => ({ account });

const mapDispatchToProps = dispatch => ({
  validate: (payload) => { dispatch(actions.validateOtpSaga(payload)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(OtpCheckModal));
