import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
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

class OtpInitModal extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeCanvas = React.createRef();
    this.state = {
      isDrawn: false,
    };
  }

  componentDidMount() {
    const {
      getInitialData,
      viewer,
    } = this.props;
    getInitialData(viewer.name);
  }

  componentDidUpdate() {
    this.drawQrCode();
  }

  drawQrCode() {
    const { qrCodeUrl } = this.props;
    const { isDrawn } = this.state;

    if (!qrCodeUrl || isDrawn) {
      return;
    }

    const canvas = this.qrCodeCanvas.current;
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, 80, 80);
      this.setState({
        isDrawn: true,
      });
    };
    img.src = qrCodeUrl;
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
        <QrCodeWrap />
        <canvas ref={this.qrCodeCanvas} width="80" height="80" />
        <Label>
          { t('googleOtp.backupKey') }
        </Label>
        <BackupKey>
          { otpKey }
        </BackupKey>
        <Caution>
          { t('googleOtp.caution') }
        </Caution>
        <NextStep href="#" onClick={e => this.handleNextStepClick(e)}>
          { t('googleOtp.nextStep') }
        </NextStep>
      </Wrap>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.account.viewer,
  ...state.otp,
});

const mapDispatchToProps = dispatch => ({
  getInitialData: (accountName) => { dispatch(actions.getInitialDataSaga(accountName)); },
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
