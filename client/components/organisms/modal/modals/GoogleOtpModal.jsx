import React from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import { actions } from 'reducer/google-otp/googleOtpReducer';
import {
  Wrap,
  Title,
  Desc,
  Label,
  QrCodeWrap,
  BackupKey,
  Caution,
  NextStep,
  CodeInput,
} from './GoogleOtpModal.styled';

class GoogleOtpModal extends React.Component {
  constructor(props) {
    super(props);
    this.qrCodeCanvas = React.createRef();
    this.codeInput = React.createRef();
    this.state = {
      stage: 0,
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
    e.preventDefault();
    this.setState({
      stage: 1,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { authenticate, viewer } = this.props;
    const codeInput = this.codeInput.current;
    const code = codeInput.value;
    if (code.length !== 6) {
      return;
    }
    authenticate({
      password: code,
      accountName: viewer.name,
    });
  }

  render() {
    const { stage } = this.state;
    const {
      t,
      otpKey,
    } = this.props;

    return (
      <React.Fragment>
        <Wrap style={{ display: (stage === 0) ? '' : 'none' }}>
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
        <Wrap style={{ display: (stage === 1) ? '' : 'none' }}>
          <Title>
            { t('googleOtp.title2')}
          </Title>
          <Desc>
            { t('googleOtp.desc2')}
          </Desc>
          <div>
            <form onSubmit={e => this.handleSubmit(e)} >
              <CodeInput type="text" innerRef={this.codeInput} />
            </form>
          </div>
        </Wrap>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  viewer: state.account.viewer,
  ...state.googleOtp,
});

const mapDispatchToProps = dispatch => ({
  getInitialData: (accountName) => { dispatch(actions.getInitialDataSaga(accountName)); },
  authenticate: (payload) => { dispatch(actions.authenticateSaga(payload)); },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(translate('sign')(GoogleOtpModal));
