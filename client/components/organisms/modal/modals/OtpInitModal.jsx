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
  QrCodeLoader,
} from './OtpModal.styled';
import Message from '../../../molecules/Message';
import Mutation from '../../../molecules/Mutation';

class OtpInitModal extends React.Component {
  handleNextStepClick(e) {
    e.preventDefault();

    const {
      showOtpCheckModal,
    } = this.props;

    showOtpCheckModal();
  }

  render() {
    const {
      t,
      viewer,
      otpKey,
    } = this.props;

    return (
      <Mutation
        action={actions.initOtpSaga({
          accountName: viewer.accountName,
        })}
        actOnMount
      >
        {(mutate, { error, loading }) => {
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
                {loading && <QrCodeLoader />}
                {otpKey && <QRCode value={`otpauth://totp/eosdaq.com:${viewer.accountName}?secret=${otpKey}&issuer=EOSDAQ`} /> }
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
        }}
      </Mutation>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.account.viewer,
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
