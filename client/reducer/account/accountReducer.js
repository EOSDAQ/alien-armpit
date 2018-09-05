import jdenticon from 'jdenticon';

export const types = {
  GET_SCATTER_IDENTITY: 'account/getScatterIdentity',
  FORGET_SCATTER_IDENTITY: 'account/forgetScatterIdentity',
  UPDATE_ACCOUNT_INFO: 'account/UPDATE_ACCOUNT_INFO',
  SIGN_IN: 'account/signIn',
  SIGN_OUT: 'account/signOut',
  SIGN_UP: 'account/signUp',
  ORDER: 'account/order',
  CHECK_OTP_AUTH: 'account/authorized/CHECK_OTP_AUTH',
  GET_VIEWER: 'account/viewer/GET',
  UPDATE_VIEWER: 'account/viewer/UPDATE',
  CHECK_OTP_CONFIRM: 'account/viewer/CHECK_OTP_CONFIRM  ',
  RESEND_EMAIL: 'account/RESEND_EMAIL',
  CREATE_ACCOUNT: 'account/create',
  CREATED_ACCOUNT: 'account/created',
  RESET_SENT_EMAIL: 'account/sentEmail/RESET',
  CHECK_SENT_EMAIL: 'account/sentEmail/CHECK',
};

export const actions = {
  getScatterIdentity: payload => ({
    type: types.GET_SCATTER_IDENTITY,
    payload,
  }),
  forgetScatterIdentity: payload => ({
    type: types.FORGET_SCATTER_IDENTITY,
    payload,
  }),
  updateAccountInfo: payload => ({
    type: types.UPDATE_ACCOUNT_INFO,
    payload,
  }),
  checkOtpAuth: payload => ({
    type: types.CHECK_OTP_AUTH,
    payload,
  }),
  getViewer: payload => ({
    type: types.GET_VIEWER,
    payload,
  }),
  updateViewer: payload => ({
    type: types.UPDATE_VIEWER,
    payload,
  }),
  checkOtpConfirm: payload => ({
    type: types.CHECK_OTP_CONFIRM,
    payload,
  }),
  createAccount: payload => ({
    type: types.CREATE_ACCOUNT,
    payload,
  }),
  createdAccount: payload => ({
    type: types.CREATED_ACCOUNT,
    payload,
  }),
  resendEmail: payload => ({
    type: types.RESEND_EMAIL,
    payload,
  }),
  signUp: payload => ({
    type: types.SIGN_UP,
    payload,
  }),
  signIn: payload => ({
    type: types.SIGN_IN,
    payload,
  }),
  signOut: payload => ({
    type: types.SIGN_OUT,
    payload,
  }),
  order: payload => ({
    type: types.ORDER,
    payload,
  }),
  resetSentEmail: payload => ({
    type: types.RESET_SENT_EMAIL,
    payload,
  }),
  checkSentEmail: payload => ({
    type: types.CHECK_SENT_EMAIL,
    payload,
  }),
};

const initialState = {
  authenticated: false,
  authorized: {
    otp: false,
  },
  viewer: null,
  sentEmail: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_VIEWER: {
      const { payload: { viewer } } = action;
      const identicon = jdenticon
        .toSvg(viewer.accountName, 32)
        .replace(/(width|height)="\d+"/g, '');
      return {
        ...state,
        viewer: {
          ...viewer,
          identicon,
        },
      };
    }
    case types.CHECK_OTP_AUTH:
      return {
        ...state,
        authorized: { ...state.authorized, otp: true },
      };
    case types.CHECK_OTP_CONFIRM:
      return {
        ...state,
        viewer: { ...state.viewer, otpConfirm: true },
      };
    case types.UPDATE_ACCOUNT_INFO:
      return {
        ...state,
        ...action.payload,
      };
    case types.CREATED_ACCOUNT:
      return {
        ...state,
        otpConfirm: false,
        emailConfirm: false,
        security: 0,
        ...action.payload,
        authenticated: true,
      };
    case types.RESET_SENT_EMAIL:
      return { ...state, sentEmail: false };
    case types.CHECK_SENT_EMAIL:
      return { ...state, sentEmail: true };
    default:
      return state;
  }
};

export default accountReducer;
