export const types = {
  AUTHENTICATE_SCATTER: 'account/authenticateScatter',
  GET_SCATTER_IDENTITY: 'account/getScatterIdentity',
  FORGET_SCATTER_IDENTITY: 'account/forgetScatterIdentity',
  UPDATE_ACCOUNT_INFO: 'account/UPDATE_ACCOUNT_INFO',
  SIGN_IN: 'account/signIn',
  SIGN_OUT: 'account/signOut',
  SIGN_UP: 'account/signUp',
  ORDER: 'account/order',
  RESEND_EMAIL: 'account/RESEND_EMAIL',
  CREATE_ACCOUNT: 'account/create',
  CREATED_ACCOUNT: 'account/created',
};

export const actions = {
  authenticateScatter: payload => ({
    type: types.AUTHENTICATE_SCATTER,
    payload,
  }),
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
};

const initialState = {
  authenticated: false,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
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
      }
    case types.SIGN_OUT:
      return initialState;

    default:
      return state;
  }
};

export default accountReducer;
