import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { QRCode } from 'react-qr-svg';
import { actions } from 'reducer/otp/otpReducer';
import modalReducer from 'reducer/modal/modalReducer';
import {
  Wrap,
  Title,
  Desc,
  Label,
  QrCodeWrap,
  BackupKey,
  Caution,
  NextStep,
} from './OtpModal.styled';
import Message from '../../../molecules/Message';

class OtpInitModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDrawn: false,
    };
  }

  componentDidMount() {
    const {
      initOtp,
      account,
      otpKey,
    } = this.props;

    !otpKey && initOtp({
      accountName: account.name
    });
  }

  handleNextStepClick(e) {
    const {
      showOtpCheckModal,
    } = this.props;
    e.preventDefault();
    showOtpCheckModal();
  }

  render() {
    const {
      t,
      account,
      otpKey,
    } = this.props;

    return (
      <Wrap>
        <Title>
          { t('googleOtp.title')}
        </Title>
        <Desc>
          { t('googleOtp.desc') }
        </Desc>
        <Label>
          { t('googleOtp.qrCode') }
        </Label>
        <QrCodeWrap>
          { otpKey && <QRCode value={`otpauth://totp/eosdaq.com:${account.name}?secret=${otpKey}&issuer=EOSDAQ`} /> }
        </QrCodeWrap>
        <Label>
          { t('googleOtp.backupKey') }
        </Label>
        <BackupKey>
          {otpKey}
        </BackupKey>
        <Caution>
          <Message warning>
            { t('googleOtp.caution') }
          </Message>
        </Caution>
        <NextStep href="#" onClick={e => this.handleNextStepClick(e)}>
          { t('googleOtp.nextStep') }
        </NextStep>
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  account: state.account,
  ...state.otp,
});

const mapDispatchToProps = dispatch => ({
  initOtp: (payload) => { dispatch(actions.initOtpSaga(payload)); },
  showOtpCheckModal: () => {
    dispatch(modalReducer.actions.openModal({
      type: 'OTP_CHECK',
    }));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(OtpInitModal));
