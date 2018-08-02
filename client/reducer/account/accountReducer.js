export const types = {
  GET_SCATTER_IDENTITY: 'account/getScatterIdentity',
  FORGET_SCATTER_IDENTITY: 'account/forgetScatterIdentity',
  SIGN_IN: 'account/signIn',
  SIGN_OUT: 'account/signOut',
};

export const actions = {
  getScatterIdentity: (payload) => ({
    type: types.GET_SCATTER_IDENTITY,
    payload,
  }),
  forgetScatterIdentity: (payload) => ({
    type: types.FORGET_SCATTER_IDENTITY,
    payload,
  }),
  signIn: (payload) => ({
    type: types.SIGN_IN,
    payload,
  }),
  signOut: (payload) => ({
    type: types.SIGN_OUT,
    payload,
  }),
};

const initialState = {
  authenticated: false,
  viewer: null,
};

const accountReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SIGN_IN:
      return {
        authenticated: true,
        viewer: action.payload.viewer,
      };
    case types.SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default accountReducer;
