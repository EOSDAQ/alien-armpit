import { createAction, handleActions } from 'redux-actions';

export const types = {
  GET_SCATTER_IDENTITY: 'account/getScatterIdentity',
  FORGET_SCATTER_IDENTITY: 'account/forgetScatterIdentity',
  SIGN_IN: 'account/signIn',
  SIGN_OUT: 'account/signOut',
}

export const actions = {
  getScatterIdentity: createAction(types.GET_SCATTER_IDENTITY),
  forgetScatterIdentity: createAction(types.FORGET_SCATTER_IDENTITY),
  signIn: createAction(types.SIGN_IN),
  signOut: createAction(types.SIGN_OUT),
};

const initialState = {
  authenticated: false,
  authorized: false,
  viewer: null,
};

const accountReducer = handleActions({
  [actions.signIn]: (state, { payload }) => {
    return {
      authenticated: true,
      authorized: false,
      viewer: payload,
    };
  },
  [actions.signOut]: (state) => initialState,
}, initialState);

export default accountReducer;