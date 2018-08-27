export const types = {
  INIT_OTP_SAGA: 'otp/INIT_OTP_SAGA',
  UPDATE_DATA: 'otp/UPDATE_DATA',
  VALIDATE_OTP_SAGA: 'otp/VALIDATE_OTP_SAGA',
};

export const actions = {
  initOtpSaga: payload => ({
    type: types.INIT_OTP_SAGA,
    payload,
  }),
  updateData: payload => ({
    type: types.UPDATE_DATA,
    payload,
  }),
  validateOtpSaga: payload => ({
    type: types.VALIDATE_OTP_SAGA,
    payload,
  }),
};

const initialState = {
  otpKey: null,
};

export const otpReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.UPDATE_DATA:
      return {
        otpKey: payload.otpKey,
        qrCodeUrl: payload.qrCodeUrl,
      };
    default:
      return state;
  }
};

export default otpReducer;
