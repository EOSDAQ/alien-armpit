// @flow

import { createAction, handleActions, type ActionType } from 'redux-actions';

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

type SignInPayload = {
  authenticated: boolean,
  viewer?: Viewer
};

export const actions = {
  getScatterIdentity: createAction(types.GET_SCATTER_IDENTITY),
  forgetScatterIdentity: createAction(types.FORGET_SCATTER_IDENTITY),
  signIn: createAction(types.SIGN_IN, (payload: SignInPayload) => payload),
  signOut: createAction(types.SIGN_OUT),
};

const initialState: {
  authenticated: boolean,
  authorized: boolean,
  viewer: Viewer|null,
} = {
  authenticated: false,
  authorized: false,
  viewer: null,
};

export type AccountState = typeof initialState;

const accountReducer = handleActions({
  [types.SIGN_IN]: (state, { payload }: ActionType<typeof actions.signIn>) => ({
    authenticated: true,
    viewer: payload,
  }),
  [types.SIGN_OUT]: () => (initialState),
}, initialState);

export default accountReducer;
