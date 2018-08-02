const types = {
  OPEN_MODAL: 'modal/open',
  CLOSE_MODAL: 'modal/close',
};

const actions = {
  openModal: (payload) => ({
    type: types.OPEN_MODAL,
    payload,
  }),
  closeModal: (payload) => ({
    type: types.CLOSE_MODAL,
    payload,
  }),
};

const initialState = null;

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.OPEN_MODAL:
      return payload;
    case types.CLOSE_MODAL:
      return initialState;
    default:
      return state;
  }
};

const modal = {
  reducer,
  actions,
  types,
};

export default modal;
