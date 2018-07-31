// @flow

const types = {
  OPEN_MODAL: 'modal/open',
  CLOSE_MODAL: 'modal/close',
};

const actions = {
  openModal: (payload: { type: string }) => ({
    type: types.OPEN_MODAL,
    payload,
  }),
  closeModal: (payload: void) => ({
    type: types.CLOSE_MODAL,
    payload,
  }),
};


export type ModalState = null|{
  type: string,
}

type Action =
| $Call<typeof actions.openModal, *>
| $Call<typeof actions.closeModal, *>;

const initialState = null;

const reducer = (state: ModalState = initialState, { type, payload }: Action) => {
  console.log(type, payload);

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
