// @flow

export const types = {
  GET_SCATTER_IDENTITY: 'account/getScatterIdentity',
  FORGET_SCATTER_IDENTITY: 'account/forgetScatterIdentity',
  SIGN_IN: 'account/signIn',
  SIGN_OUT: 'account/signOut',
};

type Viewer = {
  publicKey: string,
  name: string,
  identicon: string,
  authorized: boolean,
};

export const actions = {
  getScatterIdentity: (payload: void) => ({
    type: types.GET_SCATTER_IDENTITY,
    payload,
  }),
  forgetScatterIdentity: (payload: void) => ({
    type: types.FORGET_SCATTER_IDENTITY,
    payload,
  }),
  signIn: (payload: { viewer: Viewer }) => ({
    type: types.SIGN_IN,
    payload,
  }),
  signOut: (payload: void) => ({
    type: types.SIGN_OUT,
    payload,
  }),
};

const initialState: {
  authenticated: boolean,
  viewer: Viewer|null,
} = {
  authenticated: false,
  viewer: null,
};

export type AccountState = typeof initialState;

type Action =
  | $Call<typeof actions.signIn, *>
  | $Call<typeof actions.signOut, *>;

const accountReducer = (
  state: typeof initialState = initialState,
  action: Action,
) => {
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
