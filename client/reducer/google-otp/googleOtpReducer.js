export const types = {
  GET_INITIAL_DATA_SAGA: 'googleOtp/GET_INITIAL_DATA_SAGA',
  UPDATE_DATA: 'googelOtp/UPDATE_DATA',
  AUTHENTICATE_SAGA: 'googleOtp/AUTHENTICATE_SAGA',
};

export const actions = {
  getInitialDataSaga: payload => ({
    type: types.GET_INITIAL_DATA_SAGA,
    payload,
  }),
  updateData: payload => ({
    type: types.UPDATE_DATA,
    payload,
  }),
  authenticateSaga: payload => ({
    type: types.AUTHENTICATE_SAGA,
    payload,
  }),
};

const initialState = {
  otpKey: '',
  qrCodeUrl: '',
};

export const gooogleOtpReducer = (state = initialState, action) => {
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

export default gooogleOtpReducer;
