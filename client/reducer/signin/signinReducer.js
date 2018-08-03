export const types = {
  SEND_CONFIRM_EMAIL_SAGA: 'signin/SEND_CONFIRM_EMAIL',
};

export const actions = {
  sendConfirmEmailSaga: payload => ({
    type: types.SEND_CONFIRM_EMAIL_SAGA,
    payload,
  }),
};
