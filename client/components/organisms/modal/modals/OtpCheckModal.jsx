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

class OtpCheckModal extends React.Component {
  constructor(props) {
    super(props);
    this.codeInput = React.createRef();
  }

  handleSubmit(e) {
    e.preventDefault();
    const { validate, viewer } = this.props;
    const codeInput = this.codeInput.current;
    const code = codeInput.value;
    if (code.length !== 6) {
      return;
    }
    validate({
      code,
      accountName: viewer.name,
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
          <form onSubmit={e => this.handleSubmit(e)}>
            <CodeInput type="text" innerRef={this.codeInput} />
          </form>
        </div>
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.account.viewer,
});

const mapDispatchToProps = dispatch => ({
  validate: (payload) => { dispatch(actions.validateOtpSaga(payload)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(OtpCheckModal));
