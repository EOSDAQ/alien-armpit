export const types = {
  RECEIVE_MESSAGE: 'socket/RECEIVE_MESSAGE',
};

export const actions = {
  receiveMessage: payload => ({
    type: types.RECEIVE_MESSAGE,
    payload,
  }),
};
